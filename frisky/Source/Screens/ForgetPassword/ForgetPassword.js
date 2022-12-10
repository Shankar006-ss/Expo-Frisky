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
import { globalstyles } from "../../Common/Style";


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
      style={globalstyles.container}>
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
          <View style={{ marginTop: 0 }}>
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
 
  header: {
    alignItems: "center",
    marginTop: 130,
    margin: 50
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    color:color.WHITE ,
  },
  input: {
    margin: 10
  },

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
  button: {
    alignItems: "center",
    padding: 15,
    marginTop: 50,
    backgroundColor: color.BLUE,
  
    borderRadius: 100,
    height: 70,
  },
  buttonText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },


  emailErrormsg: {
    color: color.RED,
    textAlign: "left",
    fontSize: 17,
    paddingTop: 5,
  },
});
