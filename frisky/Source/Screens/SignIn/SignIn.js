import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {constant} from "../../Utility/Constants";


export default function LogForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(false);
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.S+/;
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const checkPasswordValidity = (text) => {
    let isNonWhiteSpace =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setPassword(text);
    if (isNonWhiteSpace.test(text)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.itemContainer}>
          <View>
         
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30 }}>
           {constant.Welcome}
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Image
              style={styles.img}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View style={{ marginTop: 50 }}>
            <TextInput
              style={styles.textInput}
              placeholder=" Email"
              value={email}
              onChangeText={handleCheckEmail}
            />
            {checkValidEmail ? (
              <Text style={styles.textFailed}>Enter valid email</Text>
            ) : (
              <Text style={styles.textFailed}></Text>
            )}
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              onChange={(e) => setPassword(e.target.value)}
              secureTextEntry={true}
            />
            {checkValidPass ? (
              <Text style={styles.error}>
                password must be one upper,lowercase,& 8digit
              </Text>
            ) : (
              <Text style={styles.error}></Text>
            )}
          </View>
          <View style={{}}>
            {email == "" || password == "" || checkValidEmail == true ? (
              <TouchableOpacity
                onPress={() => this.functionCombined()}
                disabled
                style={styles.button}
              >
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.replace("Main")}
                style={styles.button}
              >
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ paddingTop: 50 }}>
            <Text
              onPress={() => navigation.navigate("ForgetPassword")}
              style={styles.fp}
            >
              Forgot Password?
            </Text>
          </View>
          <View style={styles.line}>
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={styles.cr}
            >
              Create a new Account?
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground:{
    height: "100%", 
    width: "100%"
  },
  itemContainer:{
    alignItems: "center", 
    marginTop: 100, 
    margin: 50
  },
  fp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  cr: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 10,
  },

  img: {
    height: 100,
    width: 100,
  },
  textInput: {
    fontSize: 20,
    height: 70,
    color: "black",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 25,
    borderLeftWidth: 15,
    borderLeftColor: "#00BFFF",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    width: 300,
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#00BFFF",
    borderRadius: 50,
    marginTop: 5,
    width: 300,
    height: 60,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  logo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },

  textFailed: {
    color: "red",
    textAlign: "left",
    paddingBottom: 10,
    paddingRight: 10,
  },
  error: {
    color: "red",
    paddingBottom: 10,
    textAlign: "left",
  },
});
