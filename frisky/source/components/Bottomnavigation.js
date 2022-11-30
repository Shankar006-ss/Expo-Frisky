import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, SafeAreaView, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
// import Header from './source/components/Header';
import Home from './Home';
import Search from './Search';
import Library from './Library';
import HSB from './Appbar';
// const ListItem = ({ item}) => {
//   return(
//     <View style = {styles.item}>
//       <image source = {{
//         uri: item.uri,
//       }}
//       style={styles.ItemPhoto}
//       resizeMode="cover"/>
//       <Text style={styles.itemText}>{item.text}</Text>
//       <Header/>
//     </View>
//   )
// }
{/* <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/> */}
const Tab = createMaterialBottomTabNavigator();
export default function Navbar() {
  return (
    
      <Tab.Navigator
      activeColor="white"
      barStyle={{ backgroundColor: 'black' }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="search-web" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="music" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    
    // </View>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  Navbar: {
  },
});