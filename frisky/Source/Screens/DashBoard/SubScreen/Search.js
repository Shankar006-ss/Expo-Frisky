import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Signup } from "../../../Utility/Constants";
import SignUp from "../../SignUp/SignUp";
const Search = () => {
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
  //coming soon text styles
  text: {
    color:'#fff',
    fontSize: 50,
  },
});

export default Search;
