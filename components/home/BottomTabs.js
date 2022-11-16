import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        width: "100%",
        paddingHorizontal: 15,
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity
    style={{
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <FontAwesome5 name={props.icon} size={16} color="black" />
    <Text>{props.text}</Text>
  </TouchableOpacity>
);
