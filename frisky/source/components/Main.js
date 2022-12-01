import { StyleSheet, View } from "react-native";

//import React from 'react';

import HSB from "./Appbar";
import Navbar from "./Bottomnavigation";

export default function MainScreen() {
  return (
    <View style={styles.main}>
      <HSB/>

      <Navbar/>

      {/* <Navbar/>
       <Appbar/>
       <Home/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
