import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigations,color } from "../../../Utility/Constants";

export default function Account({ navigation }) {
  return (
    <View style={{ backgroundColor:color.BLACK, height: "100%", width: "100%", alignItems: "center",
    justifyContent:"center", }}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.replace(navigations.SIGNIN_SCREEN)}
          style={styles.button}
        >
          <Text style={styles.search}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    color: "white",
    fontSize: 30,
    alignItems: "flex-end",
  },
})
