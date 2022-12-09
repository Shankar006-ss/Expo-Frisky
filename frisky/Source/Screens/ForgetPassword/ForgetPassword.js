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
import { ErrorMessage, Signup } from "../../Utility/Constants";

export default function Forget({ navigation }) {
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.S+/;
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handleRegis = () => {
    const checkPassword = handleCheckEmail(email);
    if (!checkPassword) {
      navigation.navigate("ChangePassword");
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
          <View >
            <Text style={styles.title}>{Signup.FORGOTPASSWORD}</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder="Email Id"
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
                <Text style={styles.buttonText}>Send </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleRegis}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
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
  header: {
    alignItems: "center",
    marginTop: 100,
    margin: 50
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    color: "#fff",
  },
  input: {
    margin: 30
  },

  textInput: {
    fontSize: 20,
    height: 70,
    marginLeft: 5,
    borderColor: "#00BFFF",
    borderLeftWidth: 15,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: "white",
    marginTop: 50,
    width: 300,
  },
  button: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#00BFFF",
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 100,
    height: 70,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 10,
  },

  image: {
    height: 100,
    width: 100,
  },

  emailErrormsg: {
    color: "red",
    textAlign: "left",
    fontSize: 17,
    paddingTop: 5,
  },
});
