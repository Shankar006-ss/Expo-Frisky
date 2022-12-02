import { View, Text, StyleSheet } from "react-native";
import React from "react";
const Library = () => {
  return (
    <View>
      <Text style={styles.lib}>Library</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lib: {
    fontSize: 50,
  },
});

export default Library;
