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

  return (
    <View style={styles.fun}>
      <View style={styles.cen}>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Changepassword")}
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Sent OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    color: "#fff",
    paddingRight: 120,
  },
  cen: {
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    paddingTop: 50,
    paddingLeft: 90,
    fontSize: 24,
    color: "#000000",
    marginBottom: 10,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000000",
    marginTop: 50,
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
  textfailed: {
    color: "red",
    paddingLeft: 150,
    fontSize:17,
  },
});
