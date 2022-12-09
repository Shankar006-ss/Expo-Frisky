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
import {Signup} from '../../Utility/Constants';
import {ErrorMessage} from '../../Utility/Constants';
import {color} from '../../Utility/Constants';

export default function Reg({ navigation }) {
  const [checkValidName, setCheckValidateName] = useState(false);
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [checkValidPass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
  //name field validation
  const handleName = (text) => {
    let rule = /^[a-zA-Z]{2,11}$/;
    setName(text);
    if (rule.test(text) || rule == 0) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };
  //Email field validation
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  };
  //password validation
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
  //Confirm password validation
  const checkConfirmPasswordValidity = (text) => {
    setPass(text);
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
            onChange={(e) => setName(e.target.value)}
            onChangeText={(text) => handleName(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidName ? (
            <Text style={styles.textFailed}>{ErrorMessage.NAME}</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={(text) => handleCheckEmail(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidEmail ? (
            <Text style={styles.textFailed}>{ErrorMessage.EMAIL}</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onChangeText={(text) => checkPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {checkValidPass ? (
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
            onChange={(e) => setPass(e.target.value)}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {password == Confirm ? (
            <Text style={styles.errors}></Text>
          ) : (
            <Text style={styles.errors}>{ErrorMessage.CONFIRMPASSWORD}</Text>
          )}
          {checkValidName ||
          checkValidPass ||
          checkValidEmail ||
          password != Confirm ||
          password == "" ||
          email == "" ||
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
