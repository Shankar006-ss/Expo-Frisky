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

import { screenText,color,ErrorMessage,placeholder,Signup } from "../../Utility/Constants";


export default function Change({ navigation }) {
  const [password, setPassword] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
  const checkPasswordValidity = (text) => {
    let password =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setPassword(text);
    if (password.test(text)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };
  //Confirm password
  const checkConfirmPasswordValidity = (text) => {
    setPass(text);
  };
  return (
    <ImageBackground
      source={require("../../../Image/background.jpg")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
        <View>
          <Image
            style={styles.image}
            source={require("../../../Image/music-note.png")}
          />
        </View>
       
        <Text style={styles.title}>{screenText.CHANGE_TEXT}</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.NEW}
            underlineColorAndroid={"transparent"}
            value={password}
            maxLength={16}
            onChangeText={(text) => checkPasswordValidity(text)}
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry={true}
          />
          {checkValidpass ? (
            <Text style={styles.passwordErrormsg}>
              {ErrorMessage.PASSWORD}
            </Text>
          ) : (
            null
          )}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.CHANGE}
            maxLength={16}
            onChange={(e) => setPass(e.target.value)}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
          />
          {password == Confirm ? (
            null
          ) : (
            <Text style={styles.confirmPasswordErrormsg}>
              {ErrorMessage.CONFIRMPASSWORD}
            </Text>
          )}
        </View>
        <View>
          {checkValidpass ||
          password != Confirm ||
          password == "" ||
          Confirm == "" ? (
            <TouchableOpacity disabled style={styles.button} >
              <Text style={styles.buttontext}>{screenText.SAVE_TEXT}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.buttontext}>{screenText.SAVE_TEXT}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
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
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: color.WHITE,
    margin: 40,
  },
  textInput: {
    fontSize: 20,
    height: 70,
    borderColor:color.BLUE,
    borderLeftWidth: 15,
    paddingLeft: 30,
    borderRadius: 25,
    backgroundColor: "white",
    margin: 20,
    width: 300,
  },
  button: {
    backgroundColor:color.BLUE,
    margin: 30,
    height: 70,
    borderRadius: 60,
    width: 300,
    padding: 15,
  },
  buttonText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
  passwordErrormsg: {
    color: color.RED,
    paddingLeft: 30,
    textAlign: "left",
  },
  confirmPasswordErrormsg: {
    color: color.RED,
    paddingLeft: 30,
  },
});
