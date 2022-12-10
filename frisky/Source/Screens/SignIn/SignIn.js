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
import { ErrorMessage, Signup,placeholder,color,navigations} from "../../Utility/Constants";
import { globalstyles } from "../../Common/Style";
export default function LogForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(false);
  const handleCheckEmail = (text) => {
    let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(text);
    if (email.test(text)) {
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
    <View style={globalstyles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={globalstyles.imageBackground}
      >
        <View style={styles.itemContainer}>
          <View>
            <Text style={globalstyles.header}>
           {Signup.WELCOME}
          </Text>
          </View>
          <View>
            <Image
              style={styles.logo}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View style={styles.inputText1}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder.EMAIL}
              value={email}
              onChangeText={handleCheckEmail}
            /></View>
            <View>
            {checkValidEmail ? (
              <Text style={styles.Errormsg}>{ErrorMessage.EMAIL}</Text>
            ) : (
              null
            )}</View>
            <View style={styles.inputText1}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder.PASSWORD}
              value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              onChange={(e) => setPassword(e.target.value)}
              secureTextEntry={true}
            />
            {checkValidPass ? (
              <Text style={styles.Errormsg}>
              {ErrorMessage.PASSWORD}
              </Text>
            ) : (
              null
            )}
          </View>
          <View>
            {email == "" || password == "" || checkValidEmail == true ? (
              <TouchableOpacity
                onPress={() => this.functionCombined()}
                disabled
                style={styles.button}
              >
                <Text style={globalstyles.buttonText}>Login</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.replace(navigations.HOME_SCREEN)}
                style={styles.button}
              >
                <Text style={globalstyles.buttonText}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.footer}>
            <Text
              onPress={() => navigation.navigate(navigations.FORGOT_SCREEN)}
              style={styles.footer1}
            >
             {Signup.FORGOT_PASSWORD}
            </Text>
            <Text
              onPress={() => navigation.navigate(navigations.SIGNUP_SCREEN)}
              style={styles.footer2}
            >
              {Signup.CREATE_ACCOUNT}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({

  itemContainer:{
    alignItems:'center',
    marginTop: 80,
    margin: 50
  },
 
  inputText1:{
    marginTop: 50
  },
 footer:{
   paddingTop:20,
   alignItems:'center'
  },
  footer1: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop:50,
  },
  footer2: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop: 10,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 20
  },
  textInput: {
    fontSize: 20,
    height: 60,
    color: color.BLACK,
    backgroundColor: color.WHITE,
    borderRadius: 25,
    borderLeftWidth: 15,
    borderLeftColor: color.BLUE,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    width: 300,
  },
  button: {
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: color.BLUE,
    borderRadius: 25,
    marginTop: 70,
    width: 300,
    height: 60,
  },
  emailErrormsg: {
    color: color.RED,
    marginTop:5
  },
 
});