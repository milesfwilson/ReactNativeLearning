import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red Jacket For Sale",
    price: 100,
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: 1000,
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} price={item.price} />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
});
