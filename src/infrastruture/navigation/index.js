import React, { useContext}  from "react";
import { View, Text  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";


const resolveNavigationContent = (isAuthenticated) => {
  if (isAuthenticated) {
    return <AppNavigator/>;
  }

  return <AccountNavigator/>;
}

export const Navigation = () => {
  const { isAuthenticated, user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {resolveNavigationContent(isAuthenticated)}
    </NavigationContainer>
  );
  
}

