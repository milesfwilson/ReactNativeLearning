import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

export default function ProfileLink({ icon, color, text, margin }) {
  return (
    <View style={{ ...styles.view, marginVertical: margin }}>
      <View style={{ ...styles.icon, backgroundColor: color }}>
        <MaterialCommunityIcons name={icon} size={25} color={colors.light} />
      </View>
      <View style={styles.textBox}>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 60,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  icon: {
    margin: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
