import { View, Text, Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const style = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    opacity: 1,
    width: "100%",
    height: 120,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    paddingHorizontal: 10,
  },
  menuTitleStyle: {
    fontSize: 17,
    fontWeight: "600",
  },
});

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={style.menuTitleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      marginLeft
      source={{ uri: props.food.image }}
      style={{ width: 70, height: 75, borderRadius: 8, marginLeft: marginLeft }}
    />
  </View>
);

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 90,
      }}
      showsVerticalScrollIndicator={false}
    >
      {foods.map((food, index) => (
        <View style={style.menuItemStyle} key={index}>
          {hideCheckbox ? (
            <></>
          ) : (
            <BouncyCheckbox
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
          )}
          <FoodInfo food={food} />
          <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
        </View>
      ))}
    </ScrollView>
  );
}
