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
  ImageBackground,
} from "react-native";



export default function Regs() {
  //const localImage=require("./image/bg-image.png");
  const navigation = useNavigation();
  const [checkValidName, setCheckValidateName] = useState(true);
  const [Name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidateEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [checkValidpass, setCheckValidPass] = useState(true);
  const [Confirm,setPass]=useState("");
 // const [checkValidConfirmPassword,setCheckValidConfirmPassword]=useState(false);

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
//password validation
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

//Confirm password validation

  const checkConfirmPasswordValidity = (text) => {
  //   let password={checkPasswordValidity};
  //  let confirmPassword ={checkPasswordValidity};
   setPass(text);
    // if (password==confirmPassword) {
    //   setCheckValidConfirmPassword(false);
    // }
    
    // else {
    //   setCheckValidConfirmPassword(true);
    // }
  };
  
  

  

  
  return (
    
    <ImageBackground source={require('../screens/image/background.jpg')} style={styles.back}>
      
      
      <View>
        <Text style={styles.logo}>Welcome To Frisky</Text>
      </View>
      <View style={styles.img1}>
        <Image style={styles.img} source={require("./image/music-note.png")} />
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
          style={styles.textinput}
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
          style={styles.textinput}
          placeholder="ConfirmPassword"
          value={Confirm}
          onChange={(e) => setPass(e.target.value)}
          onChangeText={(text) => checkConfirmPasswordValidity(text)}
          secureTextEntry={true}
          underlineColorAndroid={"transparent"}
        />
        {password==Confirm ? (
          <Text style={styles.errors}></Text>
        ) : (
          <Text style={styles.errors}>password must be same</Text>
        )}

        {(checkValidName) ||
        (checkValidpass) ||
        (checkValidEmail) ||
        password!=Confirm ? (
          <TouchableOpacity
            disabled
            style={styles.button}
          
          >
            <Text style={styles.btntext}>SignUp</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
            <Text style={styles.btntext}>SignUp</Text>
          </TouchableOpacity>
        )}

        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.bottom}
        >
          Already a user?Login here
        </Text>
      </View>
      
   </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   height: 100,
  //   marginTop: StatusBar.currentHeight,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   paddingLeft: 10,
  //   flexDirection: "row",
  //   backgroundColor: "black",
  //   paddingTop: 60,
  //   marginTop: 0.1,
    
  // },
  img1: {
    height: 100,
    width: 100,
    alignItems: "center",
    paddingLeft: 200,
    padding:20,
    
  },
  img: {
    height: 80,
    width: 80,
    padding:20
  },
   
  logo:{
    color: "skyblue",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    paddingLeft: 80,
  
  },
  
  header: {
    fontSize: 25,
    color: "white",
    paddingRight: 170,
  },
  line: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:20
  },
  
  textinput: {
    
        fontSize:20,
        margin: 15,
        height: 60,
        borderColor: '#00ffff',
        //borderWidth: 1,
        borderLeftWidth:15,
        //borderRightWidth:15,
        paddingLeft: 20,
        borderRadius:25,
        backgroundColor:'white'

        
    
  },
  button: {
    alignItems: "center",
    padding:20,
    backgroundColor: '#00ffff',
    marginTop:10,
    marginBottom:10,
    borderRadius:60,
    margin:70,
    padding:15,
  },
  btntext: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 10,
    
    
  },
  bottom: {
    fontSize: 20,
    color: "skyblue",
    fontWeight: "bold",
    alignItems: "center",
    paddingLeft: 80,
    paddingTop: 35,
    
  },
  
  
  textFailed: {
    color: "red",
    paddingLeft: 220,
  },
  error: {
    color: "red",
    paddingLeft: 50,
  },
  errors:{
    color: "red",
    paddingLeft: 180,
  },
  back:{
    height:900,
  },
});
