import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import CustomButton from "./app/components/CustomButton";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen/>
  // return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  return <MyAccountScreen />;
  // return <ListingsScreen />;

  {
    /* <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,
          shadowColor: "grey",
          shadowOffset: { height: 10, width: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }}
      ></View>
      <AppText>I Love React Native</AppText>
      <MaterialCommunityIcons name="email" size={60} color="grey" /> */
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
