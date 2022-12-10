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
  ErrorMessage,
  Signup,
  placeholder,
  color,
  navigations,
} from "../../Utility/Constants";
import Validation from "../../Utility/Validation";

import { globalstyles } from "../../Common/Style";
export default function LogForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(false);
  //check email validation
  const handleCheckEmail = (text) => {
    setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  //check password validation
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Validation.validatePassword(password)) {
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
            <Text style={globalstyles.header}>{Signup.WELCOME}</Text>
          </View>
          <View>
            <Image
              style={globalstyles.image}
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
          </View>
          <View>
            {checkValidEmail ? (
              <Text style={globalstyles.Errormsg}>{ErrorMessage.EMAIL}</Text>
            ) : null}
          </View>
          <View style={styles.inputText1}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder.PASSWORD}
              value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              secureTextEntry={true}
            />
            {checkValidPass ? (
              <Text style={globalstyles.Errormsg}>{ErrorMessage.PASSWORD}</Text>
            ) : null}
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
  //screen total items styles
  itemContainer: {
    alignItems: "center",
    marginTop: 80,
    margin: 50,
  },
  //inputtext styles
  inputText1: {
    marginTop: 40,
  },
  //footer text styles
  footer: {
    paddingTop: 25,
    alignItems: "center",
  },
  //forgotpassword text styles
  footer1: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop: 30,
  },
  //create a new account text styles
  footer2: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.WHITE,
    paddingTop: 10,
  },
  //email and password textinput styles
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
  //login button styles
  button: {
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: color.BLUE,
    borderRadius: 25,
    marginTop: 50,
    width: 300,
    height: 60,
  },
});
