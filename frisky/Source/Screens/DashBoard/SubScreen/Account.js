import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Account() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.replace("SignIn")}
        style={styles.button}
      >
        <Text style={styles.search}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    color: "white",
    fontSize: 30,
    alignItems: "flex-end",
  },

  button: {
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 300,
    margin: 110,
    padding: 15,
    borderRadius: 25,
  },
});
