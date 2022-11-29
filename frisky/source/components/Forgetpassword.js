import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Forget() {
  const navigation = useNavigation();
  const renderHeader = () => {
    return (
      <View style={styles.icon}>
        <Icon name="close" size={30} color={"#fff"} />
        <Text style={styles.txt}>Forgot password</Text>
      </View>
    );
  };

  return (
    <View style={styles.fun}>
      <View style={styles.cen}>
        <TextInput
          style={styles.header}
          placeholder="Email Id"
          underlineColorAndroid={"transparent"}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Changepassword")}
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Sent OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    color: "#fff",
    paddingRight: 120,
  },
  cen: {
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    paddingTop: 50,
    paddingLeft: 90,
    fontSize: 24,
    color: "#000000",
    marginBottom: 50,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000000",
    marginTop: 0,
  },
  btntxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  icon: {
    width: "100%",
    height: 100,
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    flexDirection: "row",
    backgroundColor: "#36454F",
    paddingTop: 60,
    marginTop: 0,
  },
});
