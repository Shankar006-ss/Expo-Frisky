import React, { useState, useEffect } from "react";
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
import { globalstyles } from "../../Common/Style";
import {
  color,
  ErrorMessage,
  navigations,
  placeholder,
  screenText,
} from "../../Utility/Constants";
import Validation from "../../Utility/Validation";

export default function Change({ navigation }) {
  const [password, setPassword] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [confirm, setPass] = useState("");
  const [checkValidConfirm, setCheckValidConfirm] = useState(false);
  const [checkbutton, setCheckbutton] = useState(true)
  //Password field validation
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Validation.validatePassword(password)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };
  //Confirm password validity
  const checkConfirmPasswordValidity = (text) => {
    setPass(text);
    if (password == text) {
      setCheckValidConfirm(false);
    } else {
      setCheckValidConfirm(true);
    }
  };
  //button functionality
  useEffect(() => {
    if ((checkValidpass == false) && (checkValidConfirm == false) && !(password == '') && !(confirm == '')) {
      setCheckbutton(false);
    }
    else {
      setCheckbutton(true);
    }
  });
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
        <View>
          <Image
            style={globalstyles.image}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <Text style={styles.title}>{screenText.CHANGE_TEXT}</Text>
        <View style={styles.inputtext1}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.NEW}
            underlineColorAndroid={"transparent"}
            value={password}
            maxLength={16}
            onChangeText={(text) => checkPasswordValidity(text)}
            secureTextEntry={true}
          />
          {checkValidpass ? (
            <Text style={globalstyles.Errormsg}>{ErrorMessage.PASSWORD}</Text>
          ) : null}
        </View>
        <View style={styles.inputtext2}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.CONFIRM}
            maxLength={16}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
          />
          {checkValidConfirm ? (
            <Text style={globalstyles.Errormsg}>
              {ErrorMessage.CONFIRMPASSWORD}
            </Text>
          ) : null}
        </View>
        <View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(navigations.SIGNIN_SCREEN)}
            disabled={checkbutton}
          >

            <Text style={globalstyles.buttonText}>
              {screenText.SAVE_TEXT}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  //change password title styles
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: color.WHITE,
    marginTop: 30,
  },
  //input text box 1 styles
  inputtext1: {
    marginTop: 60,
  },
  //input text box 2 styles
  inputtext2: {
    paddingTop: 30,
  },
  //password and confirmpassword textinput styles
  textInput: {
    fontSize: 20,
    height: 60,
    borderColor: color.BLUE,
    borderLeftWidth: 15,
    paddingLeft: 30,
    borderRadius: 25,
    backgroundColor: "white",
    width: 300,
  },
  //savechanges button styles
  button: {
    backgroundColor: color.BLUE,
    marginTop: 60,
    height: 60,
    borderRadius: 25,
    width: 300,
    paddingTop: 10,
  },
});
