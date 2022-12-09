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

import { ErrorMessage, Signup,placeholder} from "../../Utility/Constants";





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
          <View style={styles.inputText}>
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
            )}
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
                onPress={() => navigation.replace(navigations.HOME_SCREEN)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.footer}>
            <Text
              onPress={() => navigation.navigate(navigations.FORGOT_SCREEN)}
              style={styles.fp}
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
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 30
  },
  inputText:{
    marginTop: 50
  },
  footer:{
   paddingTop:40,
   alignItems:'center'
  },

  footer1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingTop:40,
  },
  footer2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
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
    color: "black",
    marginBottom: 30,
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

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  emailErrormsg: {
    color: "red",
    textAlign: "left",
    paddingBottom: 10,
    paddingRight: 10,
  },
  passwordErrormsg: {
    color: "red",
    paddingBottom: 10,
    textAlign: "left",
  },
});
