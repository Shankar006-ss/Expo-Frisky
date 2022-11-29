
import React from 'react';
import{StyleSheet,View} from 'react-native';
import { Appbar} from 'react-native-paper';

const Scrollbar = () => (
  <Appbar.Header style={styles.headercolor} activeColor="white">
    <Appbar.Action icon="menu" onPress={() => {}} />
    <Appbar.Content title="Frisky" />
    
    
  </Appbar.Header>
);
  
const styles = StyleSheet.create({
  headercolor: {
   
    backgroundColor: '#000000',
  }
})


export default Scrollbar;



