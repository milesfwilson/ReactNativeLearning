import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ProfileLink from "../components/ProfileLink";
import colors from "../config/colors";
import ProfileAvatar from "../components/ProfileAvatar";
import ListItemSeparator from "../components/ListItemSeparator";

const links = [
  {
    icon: "format-list-bulleted",
    color: colors.primary,
    text: "My Listings",
  },
  {
    icon: "email",
    color: colors.secondary,
    text: "My Messages",
  },
];
export default function MyAccountScreen() {
  return (
    <Screen>
      <View>
        <ProfileAvatar />
        <ListItemSeparator />
        <FlatList
          data={links}
          keyExtractor={(links) => links.text}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ProfileLink icon={item.icon} color={item.color} text={item.text} />
          )}
        ></FlatList>
        <ProfileLink
          icon={"logout"}
          color={"#ffe66d"}
          text={"Log Out"}
          margin={15}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
