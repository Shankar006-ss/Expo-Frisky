import { useNavigation } from "@react-navigation/native";
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

export default function Forget() {
  const navigation = useNavigation();
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
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={{ alignItems: "center", marginTop: 100, margin: 50 }}>
          <View>
            <Image
              style={styles.img}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.para}>Forget Password ?</Text>
          </View>
          <View>
            <TextInput
              style={styles.header}
              placeholder="Email Id"
              maxLength={30}
              underlineColorAndroid={"transparent"}
              value={email}
              onChangeText={handleCheckEmail}
            />
            {checkValidEmail ? (
              <Text style={styles.textFailed}>Enter valid Email</Text>
            ) : (
              <Text style={styles.textFailed}></Text>
            )}
            {email == "" || checkValidEmail == true ? (
              <TouchableOpacity
                disabled
                style={styles.btn}
                onPress={handleRegis}
              >
                <Text style={styles.btnTxt}>Send </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.btn} onPress={handleRegis}>
                <Text style={styles.btnTxt}>Send</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  para: {
    fontSize: 30,
    fontWeight: "bold",

    color: "#fff",
  },

  header: {
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
  btn: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#00BFFF",
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 100,
    height: 70,
  },
  btnTxt: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 10,
  },

  img: {
    height: 100,
    width: 100,
  },

  textFailed: {
    color: "red",
    textAlign: "left",
    fontSize: 17,
    paddingTop: 5,
  },
});
