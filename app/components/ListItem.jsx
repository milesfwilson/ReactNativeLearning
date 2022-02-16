import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.listItem}>
      <Image style={styles.avatar} source={image} />
      <View style={styles.details}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 10,
  },
  listItem: {
    flexDirection: "row",
  },
  details: {
    margin: 10,
  },
});
