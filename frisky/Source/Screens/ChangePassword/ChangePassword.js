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
  const [OTP, setOTP] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
  const [checkValidConfirmPassword, setCheckValidConfirmPassword] =
    useState(false);
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
      style={{ height: "100%", width: "100%" }}
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
        <View style={styles.img1}>
          <Image
            style={styles.img}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <Text style={styles.para}>Change Password</Text>
        <View>
          <TextInput
            style={styles.change}
            placeholder="New Password"
            underlineColorAndroid={"transparent"}
            value={password}
            maxLength={16}
            onChangeText={(text) => checkPasswordValidity(text)}
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry={true}
          />
          {checkValidpass ? (
            <Text style={styles.error}>
              password must be one upper,lowercase,& 8digit
            </Text>
          ) : (
            <Text style={styles.error}></Text>
          )}
          <TextInput
            style={styles.change}
            placeholder="Retype New Password"
            maxLength={16}
            onChange={(e) => setPass(e.target.value)}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
          />
          {password == Confirm ? (
            <Text style={styles.txterror}></Text>
          ) : (
            <Text style={styles.txterror}>password must be same</Text>
          )}
        </View>
        <View>
          {checkValidpass ||
          password != Confirm ||
          password == "" ||
          Confirm == "" ? (
            <TouchableOpacity disabled style={styles.btn}>
              <Text style={styles.btntxt}>Save Changes</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.btntxt}>Save Changes</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
  },
  para: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    margin: 40,
  },
  change: {
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
  btn: {
    backgroundColor: "#00BFFF",
    margin: 30,
    height: 70,
    borderRadius: 60,
    width: 300,
    padding: 15,
  },
  btntxt: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    paddingLeft: 30,
    textAlign: "left",
  },
  txterror: {
    color: "red",
    paddingLeft: 30,
  },
});
