import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Library = () => {
  return (
    <View style={{backgroundColor:'#121212',height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
   
      <Text style={styles.lib}>Coming soon</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  lib: {
    fontSize: 50,
    color:'#fff'
  },
});

export default Library;
