import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

export default function Regs() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [checkValidName, setCheckValidateName] = useState(false);
  const [Name, setname] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm,setPass]=useState("");

  //name field validation
  const handlename = (text) => {
    let rule = /^[a-zA-Z]{2,11}$/;
    setname(text);
    if (rule.test(text) || rule == 0) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };

  //Email field validation
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
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
    <View>
      <View></View>
      <Text style={styles.logo}>FRISKY</Text>
      <View style={styles.image}>
        <Image style={styles.img} source={require("./adaptive-icon.png")} />
      </View>

      <View style={styles.line}>
        <TextInput
          style={styles.textinput}
          placeholder="Name"
          value={Name}
          onChange={(e) => setname(e.target.value)}
          onChangeText={(text) => handlename(text)}
          underlineColorAndroid={"transparent"}
        />

        {checkValidName ? (
          <Text style={styles.textFailed}>Name is required</Text>
        ) : (
          <Text style={styles.textFailed}></Text>
        )}

        <TextInput
          style={styles.textinput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => handleCheckEmail(text)}
          underlineColorAndroid={"transparent"}
        />
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Enter valid Email</Text>
        ) : (
          <Text style={styles.textFailed}></Text>
        )}

        <TextInput
          style={styles.pass}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onChangeText={(text) => checkPasswordValidity(text)}
          secureTextEntry={true}
          underlineColorAndroid={"transparent"}
        />
        {checkValidpass ? (
          <Text style={styles.error}>password must be one upper,lowercase,& 8digit</Text>
        ) : (
          <Text style={styles.error}></Text>
        )}

        <TextInput
          style={styles.text}
          placeholder="ConfirmPassword"
          secureTextEntry={true}
          underlineColorAndroid={"transparent"}
        />

        {email == "" ||
        password == "" ||
        Name == "" ||
        checkValidEmail == true ? (
          <TouchableOpacity
            disabled
            style={styles.button}
          
          >
            <Text style={styles.btntext}>Register</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
            <Text style={styles.btntext}>Register</Text>
          </TouchableOpacity>
        )}

        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.bottom}
        >
          Already a user?Login here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    flexDirection: "row",
    backgroundColor: "#36454F",
    paddingTop: 60,
    marginTop: 0.1,
  },
  header: {
    fontSize: 25,
    color: "white",
    paddingRight: 170,
  },
  line: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontSize: 18,
    height: 60,
    marginBottom: 10,
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignContent: "center",
    paddingLeft: 110,
  },
  pass: {
    fontSize: 18,
    height: 60,
    marginBottom: 10,
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignContent: "center",
    paddingLeft: 140,
  },
  textinput: {
    fontSize: 18,
    height: 60,
    marginBottom: 5,
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 20,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    padding: 15,
    
    backgroundColor: "black",
    marginTop: 40,
    paddingEnd: 30,
  },
  btntext: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 40,
    
  },
  bottom: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    paddingLeft: 60,
    paddingTop: 30,
  },
  logo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 50,
    alignItems: "center",
    marginTop: 30,
    paddingLeft: 130,
  },
  image: {
    height: 100,
    width: 100,
    alignItems: "center",
    paddingLeft: 200,
  },
  img: {
    height: 100,
    width: 100,
  },

  textFailed: {
    color: "red",
    paddingLeft: 220,
  },
  error: {
    color: "red",
    paddingLeft: 50,
  },
});
