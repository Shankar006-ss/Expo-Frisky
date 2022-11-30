import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
<<<<<<< Updated upstream
import Icon from 'react-native-vector-icons/AntDesign';
=======

import Icon from 'react-native-vector-icons/AntDesign';





>>>>>>> Stashed changes
export default function Regs() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkValidEmail, setCheckValidateEmail] = useState(false)
  const [checkValidName, setCheckValidateName] = useState(false)
  const [Name, setname] = useState("")
  const [checkValidpass, setCheckValidpass] = useState(false)
  const [Confirm, setConfirmpass] = useState(false)
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
  //name field validation
  const handlename = (text) => {
    let rule = /^[a-zA-Z]{8}$/;
    setname(text)
    if (rule.test(text) || rule == 0) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
<<<<<<< Updated upstream
    }
  };
=======

    }
  };


>>>>>>> Stashed changes
  //Email field validation
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    setEmail(text)
    if (re.test(text) || regex.test(text)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  };
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
  //password field
  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'password must not contain whitespace.';
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'password must have at least one lowercase character.';
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'password must have at least one uppercase character.';
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'password must contain atleast one degit .';
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'password must be 8-16 character long .';
    }
<<<<<<< Updated upstream
    return null;
  };
=======

    return null;
  };

>>>>>>> Stashed changes
  //confirm password
  // const setConfirm = (text) => {
  //   let rule = password;
  //   setConfirmpass(text)
  //   if (rule == Confirm) {
  //     setCheckValidpass(false);
  //   }
  //   else {
  //     setCheckValidpass(true);
  //   }
  // }
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
  //signup button
  const handleregis = () => {
    const checkPassword = checkPasswordValidity(password)
    // const checkName =handlename(Name)
    if (!checkPassword) {
      alert("Success registration")
    } else {
      alert(checkPassword)
<<<<<<< Updated upstream
    }
  };
=======

    }

  };

  

  
>>>>>>> Stashed changes
  const renderHeader = () => {
    return (
      <View style={styles.container}>
        <Icon name='arrowleft' size={30} color={"#fff"}></Icon>
        <Text style={styles.header}>Sign Up</Text>
      </View>
    )
  }


  return (

    <View>
      <View>
        {renderHeader()}
      </View>
      <Text style={styles.logo}>FRISKY</Text>
      <View style={styles.image}>
      <Image style={styles.img} source={require('./logo.png')} />
      </View>

      <View style={styles.line}>
        <TextInput style={styles.textinput} placeholder="Name" value={Name}
<<<<<<< Updated upstream
          onChange={(e => setname(e.target.value))}
          onChangeText={(text) => handlename(text)} underlineColorAndroid={'transparent'} />
=======
          onChange={(e => setname(e.target.value))} 
          onChangeText={(text) => handlename(text)} underlineColorAndroid={'transparent'} />

>>>>>>> Stashed changes
               {checkValidName ? (
                <Text style={styles.textFailed}>Name is required</Text>
              ) : (
                <Text style={styles.textFailed}></Text>
              )}
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
        <TextInput style={styles.textinput} placeholder="Email" value={email}
          onChangeText={(text) => handleCheckEmail(text)} underlineColorAndroid={'transparent'} />
               {checkValidEmail ? (
                <Text style={styles.textFailed}>Enter valid Email</Text>
              ) : (
                <Text style={styles.textFailed}></Text>
              )}
<<<<<<< Updated upstream
        <TextInput style={styles.pass} placeholder="Password" value={password} 
          onChangeText={(text) => setPassword(text)} secureTextEntry={true}
          underlineColorAndroid={'transparent'} />
        <TextInput style={styles.text} placeholder="ConfirmPassword" value={Confirm} 
        
          onChangeText={(text) => setConfirm(text)} secureTextEntry={true}
          underlineColorAndroid={'transparent'} />
                
                {email ==""|| password == "" || Name =="" || checkValidEmail == true ?(
        <TouchableOpacity
        disabled
        style={styles.button}
        onPress={handleregis}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
        ): (
        <TouchableOpacity style={styles.button} onPress={handleregis}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
        ) }
=======

        <TextInput style={styles.pass} placeholder="Password" value={password} 
          onChangeText={(text) => setPassword(text)} secureTextEntry={true} 
          underlineColorAndroid={'transparent'} />

        <TextInput style={styles.text} placeholder="ConfirmPassword" value={Confirm} 
        onChange={(e => setConfirmpass(e.target.value))} 
          onChangeText={(text) => setConfirm(text)} secureTextEntry={true} 
          underlineColorAndroid={'transparent'} />
                {email ==""|| password == true? (
                  <Text style={styles.textFailed}>Enter valid password</Text>
                ) : (
                  <Text style={styles.textFailed}></Text>
                )}

                {email ==""|| password == "" || Name =="" || checkValidEmail == true ?(

        <TouchableOpacity
        disabled
        style={styles.button} 
        onPress={handleregis}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity> 
        ): (
        <TouchableOpacity style={styles.button} onPress={handleregis}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
        ) }

>>>>>>> Stashed changes
        <Text style={styles.bottom}>Already a user?Login here</Text>
      </View>
    </View>
  );
}
<<<<<<< Updated upstream
const styles = StyleSheet.create({
=======


const styles = StyleSheet.create({

>>>>>>> Stashed changes
  container: {
    width: "100%",
    height: 100,
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: "row",
    backgroundColor: '#36454F',
    paddingTop: 60,
    marginTop: 0.1,
  },
  header: {
    fontSize: 25,
    color: 'white',
    paddingRight: 170,
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
  },
  line: {
    paddingLeft: 30,
    paddingRight: 30
  },
  text: {
    fontSize: 18,
    height: 60,
    marginBottom: 10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignContent: 'center',
    paddingLeft: 110,
  },
  pass: {
    fontSize: 18,
    height: 60,
    marginBottom: 10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignContent: 'center',
    paddingLeft: 140,
  },
  textinput: {
    fontSize: 18,
    height: 60,
    marginBottom: 5,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 20,
    textAlign: 'center',
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    marginTop: 10,
    paddingEnd: 30,
  },
  btntext: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 40
  },
  bottom: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    paddingLeft: 80,
    paddingTop: 10,
  },
  logo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 130,
<<<<<<< Updated upstream
=======
    

>>>>>>> Stashed changes
  },
  image: {
    height: 100,
    width: 100,
    alignItems: 'center',
    paddingLeft: 200
  },
  img: {
    height: 100,
    width: 100,
<<<<<<< Updated upstream
  },
=======

  },

>>>>>>> Stashed changes
  textFailed: {
    color: 'red',
    paddingLeft: 220,
  }
});