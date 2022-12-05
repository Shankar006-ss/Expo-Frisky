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

  const handleregis = () => {
    const checkPassword = handleCheckEmail(email);

    if (!checkPassword) {
      navigation.navigate("Changepassword");
    } else {
      alert(checkPassword);
    }
  };
  return (
    <ImageBackground source={require('../screens/image/background.jpg')} style={styles.back}>
    <View style={styles.fun}>
      <View style={styles.cen}>
      <View style={styles.img1}>
        <Image style={styles.img} source={require("./image/music-note.png")} />
    <Text style={styles.name}>Frisky</Text>
      </View>
        <Text style={styles.para}>Forget Your Password?</Text>
        <Text style={styles.under}>Enter the email address you used when you signed up and we'll
        help you out.</Text>
        <TextInput
          style={styles.header}
          placeholder="Email Id"
          maxLength={30}
          underlineColorAndroid={"transparent"}
          value={email}
          onChangeText={handleCheckEmail}
        />
        {checkValidEmail ? (
          <Text style={styles.textfailed}>Enter valid Email</Text>
        ) : (
          <Text style={styles.textfailed}></Text>
        )}

        {email == "" || checkValidEmail == true ? (
          <TouchableOpacity disabled style={styles.btn} onPress={handleregis}>
            <Text style={styles.btntxt}>Send Reminder</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={handleregis}>
            <Text style={styles.btntxt}>Send</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
para:{
  fontSize:30,
  fontWeight: "bold",
  marginTop:100,
  color:"skyblue"
},
under:{
  fontSize:15,
  color:"skyblue"
},
  txt: {
    fontSize: 25,
    color: "#fff",
    //paddingRight: 120,
  },
  cen: {
    paddingLeft: 30,
    paddingRight: 50,
  },
 

  header: {
    
    fontSize:20,
    //margin: 50,
    height: 60,
    marginLeft:5,
    borderColor: '#00ffff',
    //borderWidth: 1,
    borderLeftWidth:15,
    //borderRightWidth:15,
    paddingLeft: 20,
    borderRadius:25,
    backgroundColor:'white',
    marginTop:100

    

},

btn: {
  alignItems: "center",
  padding:20,
  backgroundColor: '#00ffff',
  marginTop:10,
  marginBottom:10,
  borderRadius:100,
  paddingLeft:30
 // margin:70,
 
  
  
},
btntxt: {
  fontSize: 30,
  color: "#fff",
  fontWeight: "bold",
  paddingLeft: 10,
  
  
},
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
name:{
  fontSize:25,
  fontWeight:'bold',
  color:"skyblue"
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
  textfailed: {
    color: "red",
    paddingLeft: 200,
    fontSize: 17,
  },
  back:{
    height:900
  },
});
