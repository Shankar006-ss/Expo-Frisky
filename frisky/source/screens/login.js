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
import Icon from "react-native-vector-icons/AntDesign";
export default function Logform() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidpass, setCheckValidPass]=useState(false);
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
  const checkPasswordValidity = (text) => {
    let isNonWhiteSpace = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setPassword(text);
    if (isNonWhiteSpace.test(text)) {
      setCheckValidPass(false);
    }
    else {
      setCheckValidPass(true);
    }
  };
  return (
    <View >
      <ImageBackground  source={require("./image/background.jpg")} style={styles.bg}>
      <View>
        <Text style={styles.logo}>Welcome To Frisky</Text>
      </View>
      <View style={styles.img1}>
        <Image style={styles.img} source={require("./image/music-note.png")} />
      </View>
      <View style={styles.center}>
        <TextInput
          style={styles.textinput}
          placeholder=" Email"
          value={email}
          onChangeText={handleCheckEmail}
        />
        {checkValidEmail ? (
          <Text style={styles.textfailed}>Enter valid email</Text>
        ) : (
          <Text style={styles.textfailed}></Text>
        )}
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          value={password}
          onChangeText={(text)=>checkPasswordValidity(text)}
          onChange={(e) => setPassword(e.target.value)}
          secureTextEntry={true}
        />
        {checkValidpass ? (
          <Text style={styles.error}>password must be one upper,lowercase,& 8digit</Text>
        ) : (
          <Text style={styles.error}></Text>
        )}
      </View>
      <View style={styles.forget}>
          <Text
            onPress={() => navigation.navigate("Forgetpassword")}
            style={styles.fp}
          >
            Forget Password?
          </Text>
        </View>
      <View style={styles.btn}>
        {email == "" || password == "" || checkValidEmail == true ? (
          <TouchableOpacity
            onPress={() => this.functionCombined()}
            disabled
            style={styles.button}
          >
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.replace("Main")} style={styles.button}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomtxt}>
        <Text
          onPress={() => navigation.navigate("Registration")}
          style={styles.cr}
        >
          Create a new Account?
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  fp: {
    fontSize: 20,
    fontWeight: "bold",
    color:'skyblue',
    paddingLeft:200,
  },
  cr:{
    fontSize: 20,
    fontWeight: "bold",
    color:'skyblue',
  },
  bottomtxt: {
    paddingTop: 20,
    alignItems: "center",
  },
  btn: {
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50,
  },
  center: {
    marginTop:50,
    paddingLeft:30,
    paddingRight:30,
  },
  header: {
    fontSize: 25,
    color: "white",
    paddingRight: 170,
  },
  cen: {
    paddingLeft: 1,
    paddingRight: 1,
  },
  img1: {
    height: 100,
    width: 100,
    alignItems: "center",
    paddingLeft: 200,
  },
  img: {
    height: 100,
    width: 100,
    marginTop:30
  },
  textinput: {
    fontSize: 20,
    height: 70,
    color: "black",
    marginBottom: 10,
    backgroundColor:'white',
    borderRadius:25,
    borderLeftWidth:15,
    borderLeftColor:'#00BFFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 50,
    marginTop: 40,
  },
  button: {
    alignItems: "center",
    padding: 20,
    backgroundColor: '#00BFFF',
    borderRadius:50,
    marginTop: 5,
  },
  btn:{
    marginLeft:60,
    marginRight:60,
    marginTop:50
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:25,
  },
  logo: {
    color: "skyblue",
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 120,
    paddingLeft: 50,
    paddingRight:50
  },
  
  textfailed: {
    color: "red",
    textAlign: "right",
  },
  error: {
    color: "red",
    paddingLeft: 10,
  },
  bg:{
    width:'100%',
    height:"100%"
  }
});