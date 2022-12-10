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
import { Signup, ErrorMessage, color, placeholder, navigations } from '../../Utility/Constants';
import Validation from "../../Utility/Validation";


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
          >{Signup.SIGNIN}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    height: "100%",
    width: "100%"
  },

  image: {
    height: 100,
    width: 100,
    marginTop: 10,

  },
  header: {
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
  },
  inputText: {
    marginTop: 10,
  },
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
  button: {
    backgroundColor: color.BLUE,
    marginTop: 20,
    borderRadius: 60,
    padding: 15,
  },
  buttonText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    fontSize: 20,
    color: color.WHITE,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  errorMsg: {
    color: color.RED,
    paddingLeft: 10,
  }

});
