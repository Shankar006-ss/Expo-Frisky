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
import { ErrorMessage, Signup,placeholder,color} from "../../Utility/Constants";
import Validation from "../../Utility/Validation";

export default function LogForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(false);
  const handleCheckEmail = (text) => {
   setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Validation.validatePassword(password)) {
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
            <Text style={styles.header}>
           {Signup.WELCOME}
          </Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View style={styles.inputText1}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder.EMAIL}
              value={email}
              onChangeText={handleCheckEmail}
            />
            {checkValidEmail ? (
              <Text style={styles.emailErrormsg}>{ErrorMessage.EMAIL}</Text>
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
              <Text style={styles.passwordErrormsg}>
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
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.replace("Main")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.footer}>
            <Text
              onPress={() => navigation.navigate("ForgetPassword")}
              style={styles.footer1}
            >
             {Signup.FORGOT_PASSWORD}
            </Text>
            <Text
              onPress={() => navigation.navigate("SignUp")}
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
  header:{
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 30,
    
  },
  inputText1:{
    marginTop: 40
  },
 
  footer:{
   paddingTop:20,
   alignItems:'center'
  },
  footer1: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop:20,
  },
  footer2: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop: 10,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 20
  },
  textInput: {
    fontSize: 20,
    height: 70,
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
    padding: 10,
    backgroundColor: color.BLUE,
    borderRadius: 50,
    marginTop: 30,
    width: 300,
    height: 60,
  },
  buttonText: {
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 25,
  },
  emailErrormsg: {
    color: "red",
    paddingBottom: 10,
    textAlign: "left",
  },
  passwordErrormsg: {
    color: "red",
    paddingLeft: 10,
    
  },
});