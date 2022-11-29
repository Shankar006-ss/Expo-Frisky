import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';


export default function Logform() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkValidEmail, setCheckValidEmail] = useState(false)

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
     

    const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return 'password must not contain whitespace.';
        }
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'password must have at least one lowercase character.';
        }
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'password must have at least one uppercase character.';
        }
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'password must contain atleast one degit .';
        }
        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
            return 'password must be 8-16 character long .';
        }
        return null;
    };

    const handleLogin = () => {
        const checkPassword = checkPasswordValidity(password);
        if (!checkPassword) {
            alert('Success Login');
        } else {
            alert(checkPassword);
        }
    };



    const renderHeader = () => {
        return (

            <View style={styles.headercontainer}>
                <Icon name='arrowleft' size={35} color={"white"} />
                <Text style={styles.header}>Login</Text>
            </View>
        )
    };




    return (
        <View>

            <View>
                {renderHeader()}

            </View>
            <View>
                <Text style={styles.logo}>FRISKY</Text>
            </View>
            <View style={styles.img1}>
                <Image style={styles.img} source={require('./letter-f-logo-with-musical-note-vector-37337029-removebg-preview.png')} />
            </View>
            <View style={styles.center}>
                <TextInput style={styles.textinput} placeholder="Username or Email" underlineColorAndroid={'transparent'} value={email} onChangeText={handleCheckEmail} />
                {checkValidEmail ?
                    <Text style={styles.textfailed}>Enter valid email</Text> :
                    <Text style={styles.textfailed}></Text>
                }

                <TextInput style={styles.textinput} placeholder="Password" underlineColorAndroid={'transparent'} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />

            </View>
            <View style={styles.btn}>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.btntext}>Sign In</Text>
                </TouchableOpacity>

            </View >
            <View style={styles.bottomtxt}>
                <Text style={styles.fp}>Forget Password?</Text>
                <Text style={styles.fp}>Not Registered? Register here</Text>
            </View>
        </View>
    );


}


const styles = StyleSheet.create({
    container: {



    },
    fp: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    bottomtxt: {

        paddingTop: 20,
        alignItems: 'center',
    },
    btn: {
        paddingTop: 30,
        paddingRight: 50,
        paddingLeft: 50,
    },
    center: {
        paddingRight: 50,
        paddingLeft: 50,
        textAlign: 'center',
        paddingTop:20,
        

    },
    header: {

        fontSize: 25,
        color: 'white',
        paddingRight: 170



    },
    cen: {
        paddingLeft: 1,
        paddingRight: 1,
    },
    img1: {
        height: 100,
        width: 100,
        alignItems: 'center',
        paddingLeft: 200
    },
    img: {
        height: 150,
        width: 150,
    },


    textinput: {
        fontSize: 20,
        height: 50,
        color: "black",
        marginBottom: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 5,
        paddingLeft: 1,
        textAlign: "center",

        marginTop: 30,

    },

    button: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'black',
        marginTop: 20,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
        
    },

    logo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        alignItems: 'center',
        marginTop: 50,
        paddingLeft: 110,



    },
    headercontainer: {
        width: "100%",
        height: 100,
        marginTop: StatusBar.currentHeight,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: "row",
        backgroundColor: '#36454F',
        paddingTop: 60,
        marginTop: 0.1


    },
    textfailed: {
        color: 'red',
        textAlign: 'right',
    
    }



});


