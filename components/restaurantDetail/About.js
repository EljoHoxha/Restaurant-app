import { View, Text, Image } from "react-native";
import React from "react";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" · ");

  const description = `${formattedCategories} ${
    price ? "·" + price : ""
  } · 🎫 · ${rating} ⭐ ${reviews}`;

  console.log(formattedCategories);
  console.log(description);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#D3D3D3",
        paddingBottom: 20,
        marginBottom: 20,
      }}
    >
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 150 }}
    />
  );
};

const RestaurantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 11.5,
      }}
    >
      {" "}
      {props.description}
    </Text>
  );
};
