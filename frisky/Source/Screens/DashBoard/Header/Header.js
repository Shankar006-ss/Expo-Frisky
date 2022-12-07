

import React from "react";
import { Image, StyleSheet,View,StatusBar } from "react-native";
import { Appbar } from "react-native-paper";




const HSB = () => (
  <View>
   <StatusBar translucent backgroundColor="black" barStyle="light-content" />
  <Appbar.Header style={styles.headerColor} activeColor="white">
    <Appbar.Action icon="menu"/>
    <Appbar.Content style={styles.conClr} title="Frisky"/>
    <Image source={require("../Header/Image/music-note.png")} style={styles.img} />
  </Appbar.Header>
  </View>
  );


const styles = StyleSheet.create({
  headerColor: {
    flexDirection:'row',
    margin:10,
    marginTop:50,
    
    
    backgroundColor: "#121212",
  },
  img: {
    height:50,
    width:50,
    
    
    
  },
  conClr: {
   alignItems:"center",
  },
});

export default HSB;
