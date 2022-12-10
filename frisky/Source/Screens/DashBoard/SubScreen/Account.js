
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigations,Signup } from "../../../Utility/Constants";

export default function Account({navigation}) {
  
  return (
    <View style={styles.container}>
    <View>
      <TouchableOpacity
        onPress={() => navigation.replace(navigations.SIGNIN_SCREEN)}
        style={styles.button}
      >
        <Text style={styles.buttontext}>{Signup.LOGOUT}</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //parent styles
  container:{
    backgroundColor:'#121212',
    height:'100%',
    width:'100%'
  },
  //logout button text styles
  buttonText: {
    color: "white",
    fontSize: 30,
    alignItems: "flex-end",
  },
  //logout button styles
  button: {
    alignItems: "center",
    backgroundColor: "#121212",
    marginTop: 300,
    margin: 110,
    padding: 15,
    borderRadius: 25,
  },
});
