import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  const handlePress = () => {
    console.log("Press");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={5}
    >
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.title}>Sell What You Don't Need</Text>
      </View>
      <Card
        title="Red Jacket For Sale"
        price="100"
        image={require("../assets/jacket.jpg")}
      ></Card>
      <CustomButton color={colors.primary} onPress={handlePress}>
        Login
      </CustomButton>
      <CustomButton color={colors.secondary}>Register</CustomButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "dodgerblue",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoView: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "gold",
  },
  title: {
    margin: 10,
  },
});
