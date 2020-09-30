import React from 'react';
import {View, Text} from 'react-native';
import {About} from '../src/Componenets/About';
import {Main} from '../src/Componenets/Main';
//navigation

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

export default () => {
  //const :
  const Drawer = createDrawerNavigator();

  return (
    <View flex={1}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            activeTintColor: '#FF8A00',
            backgroundColor: '#1C2227',
            inactiveTintColor: '#798288',
          }}>
          <Drawer.Screen name="Home" component={Main} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};
