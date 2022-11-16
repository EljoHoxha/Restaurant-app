import { Text, ScrollView } from "react-native";
import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";
export default function OrderComplited() {
  const [lastOrder, setLastOrder] = useState({
    items: [],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <Box
      safeAreaTop
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        autoPlay
        loop={false}
        speed={0.5}
        style={{ width: 100, height: 100 }}
        source={require("../assets/animations/check-mark.json")}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 20 }}>
        Your oder at {restaurantName} has been placed for {totalUSD}
      </Text>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 190,
        }}
      >
        <MenuItems foods={lastOrder.items} hideCheckbox={true} />

        <LottieView
          style={{ height: 200, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </ScrollView>
    </Box>
  );
}
