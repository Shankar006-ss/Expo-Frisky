import { StyleSheet, View } from 'react-native';

//import React from 'react';



import Navbar from './Navbar';
import Appbar from './Appbar';
import Home from './Home';
import HSB from './Appbar';
import ListItem from './Home'


export default function MainScreen() {
  return (
    <View style={styles.main}>

      <HSB />

      <Navbar />

      {/* <Navbar/>
       <Appbar/>
       <Home/> */}

    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  }
})