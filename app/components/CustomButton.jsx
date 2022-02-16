import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: props.color }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 40,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "500",
  },
});
