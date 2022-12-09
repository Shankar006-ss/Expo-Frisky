import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Change from "../Screens/ChangePassword/ChangePassword";
import MainScreen from "../Screens/DashBoard/MainHome/Main";
import Forget from "../Screens/ForgetPassword/ForgetPassword";
import LogForm from "../Screens/SignIn/SignIn";
import Reg from "../Screens/SignUp/SignUp";

const Stack = createStackNavigator();

function SplashScreenImage({ navigation }) {
  setTimeout(() => {
    navigation.replace("SignIn");
  }, 2000);
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../../Image/splash.png')}
      backgroundColor="#000000"
    />
  );
}

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" style={styles.container}>
        <Stack.Screen
          name="Splashscreen"
          component={SplashScreenImage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={LogForm}
          options={{
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={Reg}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={Change}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={Forget}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "",
            headerLeft: null,
            headerStyle: { backgroundColor: "#121212", height: 0 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});