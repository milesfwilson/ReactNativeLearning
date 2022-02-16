import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.listItem}>
          <Image style={styles.avatar} source={image} />
          <View style={styles.details}>
            <Text>{title}</Text>
            <Text>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
