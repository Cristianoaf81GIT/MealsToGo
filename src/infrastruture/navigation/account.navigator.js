import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DemoScreen = ({navigation, route}) =>  {
  let title = 'Login Screen';
  if (route.name === 'Main') {
    title = 'Account Screen';
  } 
  return(
    <View>
      <Text>{title}</Text>
    </View>
  )
}


export const AccountNavigator = () => (
  <Stack.Navigator 
    initialRouteName='Main'
    screenOptions={{
      headerMode: 'none'
    }}
  >
    <Stack.Screen 
      name="Main" 
      component={DemoScreen}
     options={{ title: 'Main'}}
  />

     <Stack.Screen 
      name="Login" 
      component={DemoScreen}
      options={{ title: 'Login screen' }}
    />

  </Stack.Navigator>
);


