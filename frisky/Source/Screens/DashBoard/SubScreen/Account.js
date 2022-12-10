import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color, navigations, screenText } from "../../../Utility/Constants";

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.replace(navigations.SIGNIN_SCREEN)}
          style={styles.button}
        >
          <Text style={styles.buttontext}>{screenText.LOG_OUT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //parent styles
  container: {
    backgroundColor: color.BLACK,
    height: "100%",
    width: "100%",
  },
  //logout button text styles
  buttontext: {
    color: color.WHITE,
    fontSize: 40,
    alignItems: "flex-end",
  },
  //logout button styles
  button: {
    alignItems: "center",

    marginTop: 300,
    margin: 110,
    padding: 15,
    borderRadius: 25,
  },
});
