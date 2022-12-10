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
import {
  color,
  ErrorMessage,
  navigations,
  placeholder,
  Signup,
} from "../../Utility/Constants";
import Validation from "../../Utility/Validation";
import { globalstyles } from "../../Common/Style";

export default function SignUp({ navigation }) {
  const [checkValidName, setCheckValidateName] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [checkValidPass, setCheckValidPass] = useState(false);
  const [confirm, setPass] = useState("");
  const [checkValidConfirm, setCheckValidConfirm] = useState(false);
  //name field validation
  const NameValid = (text) => {
    setName(text);
    if (Validation.validateName(name)) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };
  //Email field validation
  const checkEmail = (text) => {
    setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  };
  //password validation
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Validation.validatePassword(password)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };
  //Confirm password validation
  const checkConfirmPasswordValidity = (text) => {
    setPass(text);
    if (password == text) {
      setCheckValidConfirm(false);
    } else {
      setCheckValidConfirm(true);
    }
  };
  return (
    <ImageBackground
      source={require("../../../Image/background.jpg")}
      style={globalstyles.imageBackground}
      resizeMode="cover"
    >
      <View style={globalstyles.container}>
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
        <Text style={globalstyles.header}>{Signup.WELCOME}</Text>
        <View>
          <Image
            style={globalstyles.image}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <View style={styles.inputText}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.NAME}
            value={name}
            onChangeText={(text) => NameValid(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidName ? (
            <Text style={globalstyles.Errormsg}>{ErrorMessage.NAME}</Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.EMAIL}
            value={email}
            onChangeText={(text) => checkEmail(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidEmail ? (
            <Text style={globalstyles.Errormsg}>{ErrorMessage.EMAIL}</Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.PASSWORD}
            value={password}
            onChangeText={(text) => checkPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {checkValidPass ? (
            <Text style={globalstyles.Errormsg}>{ErrorMessage.PASSWORD}</Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.CONFIRM}
            value={confirm}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {checkValidConfirm ? (
            <Text style={globalstyles.Errormsg}>
              {ErrorMessage.CONFIRMPASSWORD}
            </Text>
          ) : null}
          {checkValidName ||
          checkValidPass ||
          checkValidEmail ||
          checkValidConfirm ||
          password == "" ||
          email == "" ||
          name == "" ||
          confirm == "" ? (
            <TouchableOpacity disabled style={styles.button}>
              <Text style={globalstyles.buttonText}>{Signup.SIGNUP}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(navigations.HOME_SCREEN)}
            >
              <Text style={globalstyles.buttonText}>{Signup.SIGNUP}</Text>
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
  //page title styles
  header: {
    marginTop: 20,
  },
  //inputtext styles
  inputText: {
    marginTop: 20,
  },
  //name,email,password and confirmpassword textinput styles
  textInput: {
    color: color.BLACK,
    fontSize: 20,
    height: 60,
    marginTop: 20,
    marginBottom: 5,
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
    borderRadius: 25,
    paddingTop: 10,
    height: 60,
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
});
