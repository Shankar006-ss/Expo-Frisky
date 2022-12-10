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
import { ErrorMessage,navigations,placeholder,color,screenText} from "../../Utility/Constants";

export default function Forget({ navigation }) {
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  //Email field validation
  const handleCheckEmail = (text) => {
    let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(text);
    if (email.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  //navigate in changepassword screen
  const handleRegis = () => {
    const checkPassword = handleCheckEmail(email);
    if (!checkPassword) {
      navigation.navigate(navigations.CHANGE_SCREEN);
    } else {
      alert(checkPassword);
    }
  };
  return (
    <View
      style={styles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.header}>
          <View>
            <Image
              style={styles.image}
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
              <Text style={styles.emailErrormsg}>{ErrorMessage.EMAIL}</Text>
            ) : (
              null
            )}
            {email == "" || checkValidEmail == true ? (
              <TouchableOpacity
                disabled
                style={styles.button}
                onPress={handleRegis}
              >
                <Text style={styles.buttonText}>{screenText.SEND_TEXT} </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleRegis}>
                <Text style={styles.buttonText}>{screenText.SEND_TEXT}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  //parent styles
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  //imagebackground styles
  imageBackground: {
    height: "100%",
    width: "100%"
  },
  //forgotpassword screen total styles
  header: {
    alignItems: "center",
    marginTop: 130,
    margin: 50
  },
  //forgotpassword title styles
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    color:color.WHITE ,
  },
  //inputtext styles
  input: {
    margin: 10
  },
  //email textinput styles
  textInput: {
    fontSize: 20,
    height: 70,
    marginLeft: 5,
    borderColor: color.BLUE,
    borderLeftWidth: 15,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: color.WHITE,
    marginTop: 30,
    width: 300,
  },
  //send button styles
  button: {
    alignItems: "center",
    padding: 15,
    marginTop: 50,
    backgroundColor: color.BLUE,
    borderRadius: 100,
    height: 70,
  },
  //send buttontext styles
  buttonText: {
    fontSize: 30,
    color: color.WHITE,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  //image logo styles
  image: {
    height: 100,
    width: 100,
  },
  //email error message styles
  emailErrormsg: {
    color: color.RED,
    textAlign: "left",
    fontSize: 17,
    paddingTop: 5,
  },
});
