import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {  AccountScreen } from '../../features/account/screens/account.screen';
import {  LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator 
    initialRouteName='Main'
    screenOptions={{
      headerMode: 'none'
    }}
  >
    <Stack.Screen 
      name="Main" 
      component={AccountScreen}
     options={{ title: 'Main'}}
    />

     <Stack.Screen 
      name="Login" 
      component={LoginScreen}
      options={{ title: 'Login screen' }}
     />

    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ title: 'Register Screen' }}
    />
  </Stack.Navigator>
);


