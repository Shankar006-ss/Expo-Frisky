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
import { Signup,ErrorMessage,color,placeholder,navigations} from '../../Utility/Constants';

export default function SignUp({ navigation }) {
  const [checkValidName, setCheckValidateName] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [checkValidPass, setCheckValidPass] = useState(false);
  const [confirm, setPass] = useState("");
  //name field validation
  const NameValid = (text) => {
    let rule = /^[a-zA-Z]{2,11}$/;
    setName(text);
    if (rule.test(text) || rule == 0) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };
  //Email field validation
  const checkEmail = (text) => {
    let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(text);
    if (email.test(text)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  };
  //password validation
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
  //Confirm password validation
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
        <Text style={styles.header}>{Signup.WELCOME}</Text>
        <View>
          <Image
            style={styles.image}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <View style={styles.inputText}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.NAME}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onChangeText={(text) => NameValid(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidName ? (
            <Text style={styles.errorMsg}>{ErrorMessage.NAME}</Text>
          ) : (
            null
          )}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.EMAIL}
            value={email}
            onChangeText={(text) => checkEmail(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidEmail ? (
            <Text style={styles.errorMsg}>{ErrorMessage.EMAIL}</Text>
          ) : (
            null
          )}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.PASSWORD}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onChangeText={(text) => checkPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {checkValidPass ? (
            <Text style={styles.errorMsg}>
              {ErrorMessage.PASSWORD}
            </Text>
          ) : (
            null
          )}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.CONFIRM}
            value={confirm}
            onChange={(e) => setPass(e.target.value)}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {password == confirm ? (
            null
          ) : (
            <Text style={styles.errorMsg}>{ErrorMessage.CONFIRMPASSWORD}</Text>
          )}
          {checkValidName ||
            checkValidPass ||
            checkValidEmail ||
            password != confirm ||
            password == "" ||
            email == "" ||
            name == "" ||
            confirm == "" ? (
            <TouchableOpacity disabled style={styles.button}>
              <Text style={styles.buttonText}>{Signup.SIGNUP}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(navigations.HOME_SCREEN)}
            >
              <Text style={styles.buttonText}>{Signup.SIGNUP}</Text>
            </TouchableOpacity>
          )}
          <Text
            onPress={() => navigation.navigate(navigations.SIGNIN_SCREEN)}
            style={styles.footer}
          >
            {Signup.SIGNIN}
          </Text>
        </View>
      </View>
    </ImageBackground>
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
  //image logo styles
  image: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  //page title styles
  header: {
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
  },
  //inputtext styles
  inputText: {
    marginTop: 10,
  },
  //name,email,password and confirmpassword textinput styles
  textInput: {
    color: color.BLACK,
    fontSize: 20,
    height: 70,
    marginTop: 20,
    borderColor: color.BLUE,
    borderWidth: 1,
    borderLeftWidth: 15,
    paddingLeft: 30,
    borderRadius: 25,
    backgroundColor: color.WHITE,
    width: 300,
  },
  //signup button styles
  button: {
    backgroundColor: color.BLUE,
    marginTop: 20,
    borderRadius: 60,
    padding: 15,
  },
  //signup button text styles
  buttonText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
  //login user text styles
  footer: {
    fontSize: 20,
    color: color.WHITE,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  //password and confirmpassword error message
  errorMsg: {
    color: color.RED,
    paddingLeft: 10,
  }
});
