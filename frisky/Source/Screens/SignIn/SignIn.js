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
import { ErrorMessage, Signup,placeholder,color,navigations, screenText} from "../../Utility/Constants";

export default function LogForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(false);
  //check email validation
  const handleCheckEmail = (text) => {
    let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(text);
    if (email.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  //check password validation
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
          <View style={styles.inputText1}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder.EMAIL}
              value={email}
              onChangeText={handleCheckEmail}
            />
            {checkValidEmail ? (
              <Text style={styles.errorMsg}>{ErrorMessage.EMAIL}</Text>
            ) : (
              null
            )}
            </View>
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
              <Text style={styles.errorMsg}>
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
                <Text style={styles.buttonText}>{screenText.LOGIN_TEXT}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.replace("Main")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>{screenText.LOGIN_TEXT}</Text>
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
  //parent styles
  container:{
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  //imagebackground styles
  imageBackground:{
    height: "100%",
    width: "100%"
  },
  //screen total items styles
  itemContainer:{
    alignItems: "center",
    marginTop: 100,
    margin: 50
  },
  //screen title styles
  header:{
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 30,
  },
  //inputtext styles
  inputText1:{
    marginTop: 40
  },
  //screen navigation link total styles
  footer:{
   paddingTop:20,
   alignItems:'center'
  },
  //forgotpassword text styles
  footer1: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop:20,
  },
  //create a new account text styles
  footer2: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop: 10,
  },
  //image logo styles
  image: {
    height: 100,
    width: 100,
    marginTop: 20
  },
  //email and password textinput styles
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
  //login button styles
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: color.BLUE,
    borderRadius: 50,
    marginTop: 40,
    width: 300,
    height: 60,
  },
  //login button text styles
  buttonText: {
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 25,
  },
  //email and password error message styles
errorMsg: {
    color: color.RED,
    textAlign: "left",
    
  },
});