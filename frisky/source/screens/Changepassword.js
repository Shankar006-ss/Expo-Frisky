import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";



export default function Change() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [checkValidpass, setCheckValidPass]=useState(false);
  const [Confirm,setPass]=useState("");
  const [checkValidConfirmPassword,setCheckValidConfirmPassword]=useState(false);



  

  
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

  //Confirm password
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
    <View style={styles.otp}>
      <View style={styles.cen}>
      <View style={styles.img1}>
        <Image style={styles.img} source={require("./image/music-note.png")} />
    <Text style={styles.name}>Frisky</Text>
      </View>
        <Text style={styles.para}>Change Password</Text>
        <Text style={styles.under}>Enter your new password.</Text>
        
        <TextInput
          style={styles.change}
          placeholder="New Password"
          underlineColorAndroid={"transparent"}
          value={password}
          maxLength={16}
          onChangeText={(text)=>checkPasswordValidity(text)}
          onChange={(e) => setPassword(e.target.value)}
          secureTextEntry={true}
        />
        {checkValidpass ? (
          <Text style={styles.error}>password must be one upper,lowercase,& 8digit</Text>
        ) : (
          <Text style={styles.error}></Text>
        )}
        <TextInput
          style={styles.confirm}
          
          placeholder="Retype New Password"
          maxLength={16}
          onChange={(e) => setPass(e.target.value)}
          onChangeText={(text) => checkConfirmPasswordValidity(text)}
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        />
        {password==Confirm ? (
          <Text style={styles.error}></Text>
        ) : (
          <Text style={styles.error}>password must be same</Text>
        )}

        <View>
          { (checkValidpass)||  password!=Confirm ? (
            <TouchableOpacity
              disabled
              style={styles.btn}
              
            >
              <Text style={styles.btntxt}>Save Changes</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.btntxt}>Save Changes</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  

  img1: {
    height: 100,
    width: 100,
    alignItems: "center",
    //paddingLeft: 200,
    paddingTop:50,
    paddingRight:30
    
  },
  img: {
    height: 80,
    width: 80,
    padding:20
  },

  para:{
    fontSize:30,
    fontWeight: "bold",
    marginTop:100,
    color:"skyblue"
  },
  under:{
    fontSize:20,
    color:"skyblue"
  },
  name:{
    fontSize:25,
    fontWeight:'bold',
    color:"skyblue"
  },
  txt: {
    fontSize: 25,
    color: "#fff",
    paddingRight: 110,
  },

  cen: {
    paddingLeft: 30,
    paddingRight: 50,
  },
  
  change: {
    fontSize:20,
    height: 60,
    marginLeft:5,
    borderColor: '#00ffff',
    borderLeftWidth:15,
    paddingLeft: 20,
    borderRadius:25,
    backgroundColor:'white',
    marginTop:100
  },
  confirm: {
    fontSize:20,
    height: 60,
    marginLeft:5,
    borderColor: '#00ffff',
    borderLeftWidth:15,
    paddingLeft: 20,
    borderRadius:25,
    backgroundColor:'white',
    marginTop:20
    
  },
  btn: {
    alignItems: "center",
    padding:20,
    backgroundColor: '#00ffff',
    marginTop:10,
    marginBottom:10,
    borderRadius:100,
    paddingLeft:30
  },
  btntxt: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  icon: {
    width: "100%",
    height: 100,
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    flexDirection: "row",
    backgroundColor: "#36454F",
    paddingTop: 60,
    marginTop: 0,
  },

  error: {
    color: "red",
    paddingLeft: 10,
  },
  back:{
    paddingTop:30,
    height:900
  },
});
