
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Account({navigation}) {
  
  return (
    <View style={{backgroundColor:'#121212',height:'100%',width:'100%'}}>
    <View>
      <TouchableOpacity
        onPress={() => navigation.replace("SignIn")}
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

  button: {
    alignItems: "center",
    backgroundColor: "#121212",
    marginTop: 300,
    margin: 110,
    padding: 15,
    borderRadius: 25,
  },
});
