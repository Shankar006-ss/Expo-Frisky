import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, StyleSheet } from "react-native";
import Change from "./source/components/Changepassword";
import Forget from "./source/components/Forgetpassword";
import Logform from "./source/components/login";
import MainScreen from "./source/components/Main";
import Regs from "./source/components/Registration";
import HSB from "./source/components/Appbar";
const Stack = createStackNavigator();



function SplashScreenImage({navigation}){
  setTimeout(()=>{
    navigation.navigate('Login')
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
            title: "Login",
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#121212", height: 100 },
          }}
        /> 
        {/* <Stack.Screen
        name="Login"
        component={Logform}
        options={{
          headerShown:false
        }}

        /> */}
        <Stack.Screen
          name="Registration"
          component={Regs}
          options={{
            name: "Registration",
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#121212", height: 100 },
          }}
        />
        <Stack.Screen
          name="Changepassword"
          component={Change}
          options={{
            title: "Change password",
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#121212", height: 100 },
          }}
        />
        <Stack.Screen
          name="Forgetpassword"
          component={Forget}
          options={{
            title: "Forgot Password",
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#121212", height: 100 },
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#121212", height: 0 },
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
