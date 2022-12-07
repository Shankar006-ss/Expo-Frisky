import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Search = () => {
  return (
    <View>
      <Text style={styles.search}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    fontSize: 50,
  },
});

export default Search;
