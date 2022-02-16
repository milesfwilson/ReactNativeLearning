import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";
import React from "react";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "t1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const handleDelete = (message) => {
    //delete message from the messages array
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("foo", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => console.log("deleted", item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  // screen: {
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
