import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// rnsf
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={25} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={25}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
