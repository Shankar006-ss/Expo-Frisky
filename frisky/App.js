import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, StyleSheet } from "react-native";
import Change from "./source/screens/Changepassword";
import Forget from "./source/screens/Forgetpassword";
import Logform from "./source/screens/login";
import MainScreen from "./source/screens/Main";
import Regs from "./source/screens/Registration";

const Stack = createStackNavigator();



function SplashScreenImage({navigation}){
  setTimeout(()=>{
    navigation.replace('Login');
  },2000);
  return(
    <ImageBackground style={{flex:1}} source={require('./assets/splash.png')} backgroundColor="#000000"/>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" style={styles.container}>
        <Stack.Screen name="Splashscreen" component={SplashScreenImage} options={{
          headerShown:false
        }}/>
        <Stack.Screen
          name="Login"
          component={Logform}
          options={{
            title: "",
            headerShown:false
            
            }}
        /> 
        

        
        <Stack.Screen
          name="Registration"
          component={Regs}
          options={{
           
           
            title: "",
            headerShown:false
            
            }}
         
        />
        <Stack.Screen
          name="Changepassword"
          component={Change}
          options={{
           
           
           title: "",
           headerShown:false
          }}
        />
        <Stack.Screen
          name="Forgetpassword"
          component={Forget}
          options={{
           
           
           title: "",
           headerShown:false
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "",
            headerLeft: null,
            headerStyle: { backgroundColor: "#121212", height: 0,},
          }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
