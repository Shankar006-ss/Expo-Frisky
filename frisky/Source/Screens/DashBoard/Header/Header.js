import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { color, homescreen } from "../../../Utility/Constants";

const HSB = () => (
  <View>
    <StatusBar translucent backgroundColor={color.BLACK} barStyle="light-content" />
    <Appbar.Header style={styles.headerColor} activeColor="white">
      <Appbar.Action icon="menu" />
      <Appbar.Content style={styles.conClr} title={homescreen.TITLE} />
      <Image
        source={require("../../../../Image/music-note.png")}
        style={styles.img}
      />
    </Appbar.Header>
  </View>
);

const styles = StyleSheet.create({
  headerColor: {
    flexDirection: "row",
    margin: 15,
    marginTop: 50,
    backgroundColor: color.BLACK,
  },
  img: {
    height: 40,
    width: 40,
  },
  conClr: {
    alignItems: "center",
  },
});

export default HSB;
