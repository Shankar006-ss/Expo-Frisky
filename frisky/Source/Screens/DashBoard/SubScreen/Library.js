import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Signup } from "../../../Utility/Constants";

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Signup.COMINGSOON}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //parent styles
  container:{
    backgroundColor:'#121212',
    height:'100%',width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  //library text styles
  text: {
    fontSize: 50,
    color: "#fff",
  },
});

export default Library;
