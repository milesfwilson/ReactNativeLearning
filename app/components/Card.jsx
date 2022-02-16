import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>${props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "90%",
    overflow: "hidden",
    shadowColor: "grey",
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginLeft: 10,
    marginVertical: 5,
    fontSize: 12,
  },
  price: {
    marginLeft: 20,
    marginVertical: 5,
    color: colors.secondary,
  },
});
