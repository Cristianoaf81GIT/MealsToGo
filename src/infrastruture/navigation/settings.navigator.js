import React from "react";

import {
    createStackNavigator,
    CardStyleInterpolators
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route, navigation}) => {

    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
            />

            <SettingsStack.Screen name="Favourites" component={() => null} />
        </SettingsStack.Navigator>   
    );
}; 