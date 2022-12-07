import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
