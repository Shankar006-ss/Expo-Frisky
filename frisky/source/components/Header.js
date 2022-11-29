import * as React from 'react';
import { View, Text } from 'react-native';


function Head() {
  return (
    <View>
      <View>
        <Text></Text>
      </View>
      {/* <Appbar.Header>
      
      <Appbar.Content title="My awesome app" />
      
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }>
          <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Option 1" />
          <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
          <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
        </Menu>
      
    </Appbar.Header>  */}

      {/* <ProfileTabNavigator.Navigator tabBarOptions={{
            activeTintColor: Colors.COLOR_WHITE,
            labelStyle: {
                textTransform: "uppercase",
            },
            inactiveTintColor: Colors.COLOR_SUPER_DARK_GREY,
            indicatorStyle: {
                height: null,
                top: '10%',
                bottom: '10%',
                width: '45%',
                left: '2.5%',
                borderRadius: 100,
                backgroundColor: Colors.PRIMARY_TWO,
            },
            style: {
                alignSelf: "center",
                width: '50%',
                borderRadius: 100,
                borderColor: "blue",
                backgroundColor: "white",
                elevation: 5, // shadow on Android
                shadowOpacity: .10, // shadow on iOS,
                shadowRadius: 4, // shadow blur on iOS
            },
            tabStyle: {
                borderRadius: 100,
            },
        }}
        swipeEnabled={true}>
     <ProfileTabNavigator.Screen name="Info" component={ProfileInfoScreen} />
     <ProfileTabNavigator.Screen name="Photos" component={ProfilePhotosScreen} />
   </ProfileTabNavigator.Navigator>
 */}

    </View>

  );
}

export default Head;



//