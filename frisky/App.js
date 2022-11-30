import Change from "./source/components/Changepassword";
import Forget from "./source/components/Forgetpassword";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logform from "./source/components/login";
import Regs from "./source/components/Registration";
import Home from "./source/components/Home";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MainScreen from "./source/components/Main";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="Login"
          component={Logform}
          options={{
            title: "Login",
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#000000", height: 100 },
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Regs}
          options={{
            name: "Registration",
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ marginRight: 550 }}>
                  <Icon name="close" size={35} color={"#fff"} />
                </TouchableOpacity>
              </View>
            ),
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#000000", height: 100 },
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
            headerStyle: { backgroundColor: "#000000", height: 100 },
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
            headerStyle: { backgroundColor: "#000000", height: 100 },
          }}
        />
        
       <Stack.Screen name="Main" component={MainScreen} options={{title:"",headerStyle: { backgroundColor: "#000000", height: 0 },}}/>
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
