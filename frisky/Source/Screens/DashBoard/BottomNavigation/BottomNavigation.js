import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Account from "../SubScreen/Account";
import Library from "../SubScreen/Library";
import Search from "../SubScreen/Search";
import Home from "../Home/Home";

const Tab = createMaterialBottomTabNavigator();
export default function NavBar() {
  return (
    <Tab.Navigator
      activeColor="white"
      barStyle={{ backgroundColor: "#121212" }}
    >
      <Tab.Screen //buttom home screen navigation
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen //buttom search screen navigation
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen //buttom library screen navigation
        name="Library"
        component={Library}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen //buttom account screen navigation
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

