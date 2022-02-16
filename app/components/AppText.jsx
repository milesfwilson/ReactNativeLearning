import { Text, View, StyleSheet } from "react-native";
import React from "react";
export default function AppText({ children }) {
  // object destructuring
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
