import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ProfileAvatar() {
  return (
    <View style={styles.listItem}>
      <Image style={styles.avatar} source={require("../assets/mosh.jpg")} />
      <View style={styles.details}>
        <Text>Mosh Hamedani</Text>
        <Text>programmingwithmosh@gmail.com</Text>
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
    backgroundColor: colors.white,
    marginVertical: 25,
  },
  details: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    margin: 10,
  },
});
