import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Logform() {
  const navigation = useNavigation();
  const renderHeader = () => {
    return (
      <View style={styles.headercontainer}>
        <Icon name="arrowleft" size={35} color={"white"} />
        <Text style={styles.header}>Login</Text>
      </View>
    );
  };
  return (
    <View>
      
      <View>
        <Text style={styles.logo}>FRISKY</Text>
      </View>
      <View style={styles.img1}>
        <Image
          style={styles.img}
          source={require("./letter-f-logo-with-musical-note-vector-37337029-removebg-preview.png")}
        />
      </View>
      <View style={styles.center}>
        <TextInput
          style={styles.textinput}
          placeholder="Username or Email"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.btntext}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomtxt}>
        <View>
          <Text
            onPress={() => navigation.navigate("Forgetpassword")}
            style={styles.fp}
          >
            Forget Password?
          </Text>
        </View>
        <Text
          onPress={() => navigation.navigate("Registration")}
          style={styles.fp}
        >
          Not Registered? Register here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  fp: {
    fontSize: 15,
    fontWeight: "bold",
  },
  bottomtxt: {
    paddingTop: 20,
    alignItems: "center",
  },
  btn: {
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50,
  },
  center: {
    paddingRight: 50,
    paddingLeft: 50,
  },
  header: {
    fontSize: 25,
    color: "white",
    paddingRight: 170,
  },
  cen: {
    paddingLeft: 1,
    paddingRight: 1,
  },
  img1: {
    height: 100,
    width: 100,
    alignItems: "center",
    paddingLeft: 200,
  },
  img: {
    height: 150,
    width: 150,
  },

  textinput: {
    fontSize: 20,
    height: 50,
    color: "white",
    marginBottom: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    marginTop: 40,
  },
  button: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
    marginTop: 20,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },

  logo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 60,
    alignItems: "center",
    marginTop: 50,
    paddingLeft: 110,
  },
  headercontainer: {
    width: "100%",
    height: 100,
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    flexDirection: "row",
    backgroundColor: "#36454F",
    paddingTop: 60,
    marginTop: 0.1,
  },
});
