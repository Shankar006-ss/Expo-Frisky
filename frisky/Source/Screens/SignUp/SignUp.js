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
import { Signup } from '../../Utility/Constants';
import { ErrorMessage } from '../../Utility/Constants';
import { color } from '../../Utility/Constants';

export default function Reg({ navigation }) {
  const [CheckValidName, SetCheckValidateName] = useState(false);
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [CheckValidEmail, SetCheckValidateEmail] = useState(false);
  const [Password, SetPassword] = useState("");
  const [CheckValidPass, SetCheckValidPass] = useState(false);
  const [Confirm, SetPass] = useState("");
  //name field validation
  const NameValid = (text) => {
    let rule = /^[a-zA-Z]{2,11}$/;
    SetName(text);
    if (rule.test(text) || rule == 0) {
      SetCheckValidateName(false);
    } else {
      SetCheckValidateName(true);
    }
  };
  //Email field validation
  const CheckEmail = (text) => {
    
    let email= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    SetEmail(text);
    if ( email.test(text)) {
      SetCheckValidateEmail(false);
    } else {
      SetCheckValidateEmail(true);
    }
  };
  //password validation
  const CheckPasswordValidity = (text) => {
    let password =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    SetPassword(text);
    if (password.test(text)) {
      SetCheckValidPass(false);
    } else {
      SetCheckValidPass(true);
    }
  };
  //Confirm password validation
  const CheckConfirmPasswordValidity = (text) => {
    SetPass(text);
  };
  return (
    <ImageBackground
      source={require("../../../Image/background.jpg")}
      style={{ height: "100%", width: "100%", flex: 1 }}
      resizeMode="cover"
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
        <Text style={styles.logo}>{Signup.WELCOME}</Text>
        <View style={styles.img1}>
          <Image
            style={styles.img}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <View style={styles.line}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
            onChangeText={(text) => NameValid(text)}
            underlineColorAndroid={"transparent"}
          />
          {CheckValidName ? (
            <Text style={styles.textFailed}>{ErrorMessage.NAME}</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={Email}
            onChangeText={(text) => CheckEmail(text)}
            underlineColorAndroid={"transparent"}
          />
          {CheckValidEmail ? (
            <Text style={styles.textFailed}>{ErrorMessage.EMAIL}</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
            onChangeText={(text) => CheckPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {CheckValidPass ? (
            <Text style={styles.error}>
              {ErrorMessage.PASSWORD}
            </Text>
          ) : (
            <Text style={styles.error}></Text>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            value={Confirm}
            onChange={(e) => SetPass(e.target.value)}
            onChangeText={(text) => CheckConfirmPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {Password == Confirm ? (
            <Text style={styles.errors}></Text>
          ) : (
            <Text style={styles.errors}>{ErrorMessage.CONFIRMPASSWORD}</Text>
          )}
          {CheckValidName ||
            CheckValidPass ||
            CheckValidEmail ||
            Password != Confirm ||
            Password == "" ||
            Email == "" ||
            Name == "" ||
            Confirm == "" ? (
            <TouchableOpacity disabled style={styles.button}>
              <Text style={styles.btnText}>{Signup.SIGNUP}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Main")}
            >
              <Text style={styles.btnText}>{Signup.SIGNUP}</Text>
            </TouchableOpacity>
          )}
          <Text
            onPress={() => navigation.navigate("SignIn")}
            style={styles.bottom}
          >
            {Signup.SIGNIN}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  img1: {
    marginTop: 20,
  },
  img: {
    height: 100,
    width: 100,
  },
  logo: {
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
  },
  line: {
    marginTop: 10,
  },
  textInput: {
    color: color.BLACK,
    fontSize: 20,
    height: 70,
    marginTop: 10,
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
    marginTop: 30,
    borderRadius: 60,
    padding: 15,
  },
  btnText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottom: {
    fontSize: 20,
    color: color.WHITE,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  textFailed: {
    color: color.RED,
    paddingLeft: 20,
  },
  error: {
    color: color.RED,
    paddingLeft: 10,
  },
  errors: {
    color: color.RED,
    paddingLeft: 10,
  },
});
