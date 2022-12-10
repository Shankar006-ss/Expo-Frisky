import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { color, homescreen } from '../../../Utility/Constants';

const HSB = () => (
  <View>
    <StatusBar translucent backgroundColor="black" barStyle="light-content" />
    <Appbar.Header style={styles.header} activeColor="white">

      <Appbar.Action icon="menu" />

      <Appbar.Content style={styles.headerTitle} title={homescreen.TITLE} />
      <Image
        source={require("../../../../Image/music-note.png")}
        style={styles.image}
      />
    </Appbar.Header>
  </View>
);

const styles = StyleSheet.create({
  // home header styles
  header: {
    flexDirection: "row",
    margin: 15,
    marginTop: 50,
    backgroundColor: color.DARK,
  },
  //logo image styles
  image: {
    height: 40,
    width: 40,
  },
  //header title styles
  headerTitle: {
    alignItems: "center",

  },
});

export default HSB;
