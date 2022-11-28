import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, StatusBar, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
//import { useFonts } from 'expo-font';



export default function Regs() {

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
        <TextInput style={styles.textinput} placeholder="Name"
          underlineColorAndroid={'transparent'} />

        <TextInput style={styles.textinput} placeholder="Email"
          underlineColorAndroid={'transparent'} />

        <TextInput style={styles.pass} placeholder="Password"
          secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TextInput style={styles.text} placeholder="ConfirmPassword"
          secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.bottom}>Already a user?Login here</Text>
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
    fontFamily: 'pattaya'

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
    marginBottom: 10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignContent: 'center',
    paddingLeft: 150,


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
    fontFamily: 'Italic'


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

  }

});
