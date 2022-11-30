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

/*export default function Header(){
    return(
            <View style={styles.head}>
                <Text style={styles.txt}>Change Password</Text>
            </View>
    );
}*/

export default function Change() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "password must not contain whitespace.";
    }
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "password must have at least one lowercase character.";
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "password must have at least one uppercase character.";
    }
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "password must contain atleast one degit .";
    }
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "password must be 8-16 character long .";
    }
    return null;
  };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      navigation.navigate("Registration");
    } else {
      alert(checkPassword);
    }
  };
  const renderHeader = () => {
    return (
      <View style={styles.icon}>
        <Icon name="close" size={30} color={"#fff"} />
        <Text style={styles.txt}>Change password</Text>
      </View>
    );
  };

  return (
    <View style={styles.otp}>
      <View style={styles.cen}>
        <TextInput
          style={styles.enterotp}
          placeholder="Enter OTP"
          keyboardType="numeric"
          maxLength={4}
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.change}
          placeholder="Change Password"
          underlineColorAndroid={"transparent"}
          value={password}
          maxLength={16}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.confirm}
          placeholder="Confirm Password"
          maxLength={16}
          underlineColorAndroid={"transparent"}
        />
        <View>
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btntxt}>Submit</Text>
          </TouchableOpacity>
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
    marginBottom: 50,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
  confirm: {
    paddingLeft: 60,
    justifyContent: "center",
    fontSize: 20,
    color: "#000000",
    marginBottom: 50,
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
});
