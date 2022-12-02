import { StyleSheet,View,Text } from "react-native";
import React from 'react';
const Search = () =>{
    return(
        <View>
            <Text style={styles.search}>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
search:{
    fontSize:50,
}
});


export default Search