import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SingIn from './pages/SingIn/';
import SingUp from './pages/SingUp/';
import Home from './pages/Home/';

export default function Router() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SingIn"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SingUp" component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
