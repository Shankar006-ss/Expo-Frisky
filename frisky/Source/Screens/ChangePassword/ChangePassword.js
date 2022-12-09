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

export default function Change({ navigation }) {
  const [password, setPassword] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
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
  //Confirm password
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
        <View>
          <Image
            style={styles.image}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <Text style={styles.title}>Change Password</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="New Password"
            underlineColorAndroid={"transparent"}
            value={password}
            maxLength={16}
            onChangeText={(text) => checkPasswordValidity(text)}
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry={true}
          />
          {checkValidpass ? (
            <Text style={styles.passwordErrormsg}>
              password must be one upper,lowercase,& 8digit
            </Text>
          ) : (
            null
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Retype New Password"
            maxLength={16}
            onChange={(e) => setPass(e.target.value)}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
          />
          {password == Confirm ? (
            null
          ) : (
            <Text style={styles.confirmPasswordErrormsg}>password must be same</Text>
          )}
        </View>
        <View>
          {checkValidpass ||
          password != Confirm ||
          password == "" ||
          Confirm == "" ? (
            <TouchableOpacity disabled style={styles.button} >
              <Text style={styles.buttontext}>Save Changes</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.buttontext}>Save Changes</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground:{
    height: "100%", 
    width: "100%"
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    margin: 40,
  },
  textInput: {
    fontSize: 20,
    height: 70,
    borderColor: "#00BFFF",
    borderLeftWidth: 15,
    paddingLeft: 30,
    borderRadius: 25,
    backgroundColor: "white",
    margin: 20,
    width: 300,
  },
  button: {
    backgroundColor: "#00BFFF",
    margin: 30,
    height: 70,
    borderRadius: 60,
    width: 300,
    padding: 15,
  },
  buttontext: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  passwordErrormsg: {
    color: "red",
    paddingLeft: 30,
    textAlign: "left",
  },
  confirmPasswordErrormsg: {
    color: "red",
    paddingLeft: 30,
  },
});
