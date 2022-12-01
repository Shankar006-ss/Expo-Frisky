import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";



export default function Change() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [checkValidpass, setCheckValidPass]=useState(false);


  

  
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
    <View style={styles.otp}>
      <View style={styles.cen}>
        <TextInput
          style={styles.enterotp}
          placeholder="Enter OTP"
          keyboardType="numeric"
          maxLength={4}
          value={OTP}
          onChangeText={(text) => setOTP(text)}
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.change}
          placeholder="Change Password"
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
          
          placeholder="Confirm Password"
          maxLength={16}
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        />
        <View>
          {OTP == "" || password == true ? (
            <TouchableOpacity
              disabled
              style={styles.btn}
              
            >
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    color: "#fff",
    paddingRight: 110,
  },

  cen: {
    paddingLeft: 60,
    paddingRight: 60,
  },
  enterotp: {
    paddingTop: 40,
    paddingLeft: 90,
    fontSize: 20,
    color: "#000000",
    marginBottom: 50,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
  change: {
    paddingLeft: 60,
    justifyContent: "center",
    fontSize: 20,
    color: "#000000",
    marginBottom: 10,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
  confirm: {
    paddingLeft: 60,
    justifyContent: "center",
    fontSize: 20,
    color: "#000000",
    marginBottom: 50,
    marginTop:30,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000000",
    marginTop: 0,
  },
  btntxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
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
    paddingLeft: 5,
  },
});
