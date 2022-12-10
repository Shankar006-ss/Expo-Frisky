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
  screenText,
} from "../../Utility/Constants";
import Validation from "../../Utility/Validation";
import { globalstyles } from "../../Common/Style";

export default function Forget({ navigation }) {
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  //Email field validation
  const handleCheckEmail = (text) => {
    setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <View style={globalstyles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={globalstyles.imageBackground}
      >
        <View style={styles.header}>
          <View>
            <Image
              style={globalstyles.image}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View>
            <Text style={styles.title}>{screenText.FORGOT_TEXT}</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder.EMAIL}
              maxLength={30}
              underlineColorAndroid={"transparent"}
              value={email}
              onChangeText={handleCheckEmail}
            />
            {checkValidEmail ? (
              <Text style={globalstyles.Errormsg}>{ErrorMessage.EMAIL}</Text>
            ) : null}
            {email == "" || checkValidEmail == true ? (
              <TouchableOpacity disabled style={styles.button}>
                <Text style={globalstyles.buttonText}>
                  {screenText.SEND_TEXT}{" "}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(navigations.CHANGE_SCREEN)}
              >
                <Text style={globalstyles.buttonText}>
                  {screenText.SEND_TEXT}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  //forgotpassword screen total styles
  header: {
    alignItems: "center",
    marginTop: 100,
    margin: 50,
  },
  //forgotpassword title styles
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    color: color.WHITE,
  },
  //inputtext styles
  input: {
    margin: 10,
  },
  //email textinput styles
  textInput: {
    fontSize: 20,
    height: 60,
    marginLeft: 5,
    borderColor: color.BLUE,
    borderLeftWidth: 15,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: color.WHITE,
    marginTop: 50,
    width: 300,
  },
  //send button styles
  button: {
    alignItems: "center",
    padding: 10,
    marginTop: 50,
    backgroundColor: color.BLUE,
    borderRadius: 25,
    height: 60,
  },
});
