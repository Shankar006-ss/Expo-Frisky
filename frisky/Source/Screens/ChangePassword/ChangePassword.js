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
import { screenText,color,ErrorMessage,placeholder, navigations } from "../../Utility/Constants";

export default function Change({ navigation }) {
  const [password, setPassword] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
  // check password validity
  const checkPasswordValidity = (text) => {     
    let password =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setPassword(text);
    if (password.test(text)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };
  //Confirm password validity
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
        <Text style={styles.title}>{screenText.CHANGE_TEXT}</Text>
          <View style={styles.inputtext1}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.NEW}
            underlineColorAndroid={"transparent"}
            value={password}
            maxLength={16}
            onChangeText={(text) => checkPasswordValidity(text)}
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry={true}
          />
          {checkValidpass ? (
            <Text style={styles.Errormsg}>
              {ErrorMessage.PASSWORD}
            </Text>
          ) : (
            null
          )}
          </View>
          <View style={styles.inputtext1}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder.CONFIRM}
            maxLength={16}
            onChange={(e) => setPass(e.target.value)}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
          />
          {password == Confirm ? (
            null
          ) : (
            <Text style={styles.Errormsg}>
              {ErrorMessage.CONFIRMPASSWORD}
            </Text>
          )}
          </View>
        <View>
          {checkValidpass ||
          password != Confirm ||
          password == "" ||
          Confirm == "" ? (
            <TouchableOpacity disabled style={styles.button} >
              <Text style={styles.buttonText}>{screenText.SAVE_TEXT}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(navigations.SIGNIN_SCREEN)}
            >
              <Text style={styles.buttonText}>{screenText.SAVE_TEXT}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  //parent styles
  container:{
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  //imagebackground styles
  imageBackground:{
    height: "100%", 
    width: "100%"
  },
  //image logo styles
  image: {
    height: 100,
    width: 100,
  },
  //page title styles
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: color.WHITE,
    margin: 40,
  },
  //password and confirmpassword textinput styles
  textInput: {
    fontSize: 20,
    height: 70,
    borderColor:color.BLUE,
    borderLeftWidth: 15,
    paddingLeft: 30,
    borderRadius: 25,
    backgroundColor: "white",
    margin: 20,
    width: 300,
  },
  //savechanges button styles
  button: {
    backgroundColor:color.BLUE,
    margin: 30,
    height: 70,
    borderRadius: 60,
    width: 300,
    padding: 15,
  },
  //savechanges button text styles
  buttonText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
  //password and confirmpassword error message styles
  Errormsg: {
    color: color.RED,
    paddingBottom: 10,
    textAlign: "left",
    paddingLeft:30
  },
  //inputtext style
  inputtext1:{
    marginTop: 40,
  },
});
