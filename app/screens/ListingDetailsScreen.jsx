import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

import ListItem from "../components/ListItem";
export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.listingImage}
        source={require("../assets/jacket.jpg")}
      />
      <Text style={styles.title}>Red Jacket for sale</Text>
      <Text style={styles.price}>$100</Text>
      <ListItem
        title="Mosh Hamedani"
        subTitle="5 Listings"
        image={require("../assets/mosh.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listingImage: {
    width: "100%",
    height: 300,
  },

  title: {
    margin: 5,
    fontSize: 18,
  },
  price: {
    margin: 5,
    color: colors.secondary,
    fontWeight: "bold",
  },
});
