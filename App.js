import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme, paperTheme } from "./src/infrastruture/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants-screen";
import { Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  // remove-me
  const SettingsScreen = () => {
    return (
      <SafeArea>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Settings!</Text>
        </View>
      </SafeArea>
    );
  };
  const MapScreen = () => {
    return (
      <SafeArea>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Map</Text>
        </View>
      </SafeArea>
    );
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  const Tab = createBottomTabNavigator();

  const AppTabs = () => (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );

  return (
    <>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AppTabs />
          </NavigationContainer>
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      </PaperProvider>
    </>
  );
}
