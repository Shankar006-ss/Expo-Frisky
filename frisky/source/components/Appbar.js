
import React from 'react';
import{StyleSheet,View,Image} from 'react-native';
import { Appbar} from 'react-native-paper';


const HSB = () => (

  <Appbar.Header style={styles.headercolor} activeColor="white">
    <Appbar.Action icon="menu" onPress={() => {}} />
    <Appbar.Content style={styles.conclr} title="Frisky" />
    <Appbar.Action icon="account" onPress={() => {}} />
    <Image source={require('../components/logo.png')} style={styles.img}/>
    
  </Appbar.Header>
);
  
const styles = StyleSheet.create({
  headercolor: {
    height:50,
    padding:10,
    backgroundColor: '#000000',
  },
  img:{
    width:10,
    paddingRight:50,
    padding:0,
    height:70
  },
  conclr:{
    alignItems:'center'
  }
})


export default HSB;



