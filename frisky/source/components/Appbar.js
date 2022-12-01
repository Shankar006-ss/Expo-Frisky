

import React from "react";
import { Image, StyleSheet,View} from "react-native";
import { Appbar } from "react-native-paper";




const HSB = () => (
  
  <Appbar.Header style={styles.headercolor} activeColor="white">
    <Appbar.Action icon="menu"/>
    <Appbar.Content style={styles.conclr} title="Frisky" />
   
    
    
    <Image source={require("./adaptive-icon.png")} style={styles.img} />
  </Appbar.Header>
  );


const styles = StyleSheet.create({
  headercolor: {
    height: 50,
    padding: 10,
    backgroundColor: "#121212",
  },
  img: {
    width: 0,
    paddingRight: 50,
    padding: 0,
    height: 30,
  },
  conclr: {
   paddingLeft:120
  },
});

export default HSB;
