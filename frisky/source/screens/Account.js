import { useNavigation } from "@react-navigation/native";

import { StyleSheet,View,Text,TouchableOpacity,Button } from "react-native";
import React from 'react';


export default function Account(){
    const navigation = useNavigation();
    return(
        <View>
        <TouchableOpacity onPress={()=>navigation.replace('Login')} style={styles.button}>
            <Text style={styles.search}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
search:{
    color:"white",
    fontSize:30,
    alignItems:"flex-end"

},

button:{
  alignItems:"center",
  backgroundColor:"black",
  marginTop:300,
  margin:110,
  padding:15,
  borderRadius:25
  
}
});


