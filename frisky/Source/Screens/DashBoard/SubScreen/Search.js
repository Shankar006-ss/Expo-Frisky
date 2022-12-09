import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Search = () => {
  return (
    <View style={{backgroundColor:'#121212',height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.search}>Coming soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    color:'#fff',
    fontSize: 50,
  },
});

export default Search;
