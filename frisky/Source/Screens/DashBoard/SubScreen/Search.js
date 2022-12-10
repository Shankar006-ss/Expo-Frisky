import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color, screenText } from "../../../Utility/Constants";

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{screenText.COMING_SOON}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //parent styles
  container: {
    backgroundColor: color.BLACK,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  //coming soon text styles
  text: {
    color: color.WHITE,
    fontSize: 50,
  },
});

export default Search;
