import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Constants from 'expo-constants';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ThemeProvider } from "styled-components/native";
import { theme, paperTheme } from "./src/infrastruture/theme";
import { Provider as PaperProvider } from "react-native-paper";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastruture/navigation";

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId 
};


initializeApp(firebaseConfig);


export default function App() {
  const auth = getAuth();
  const app = getApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <FavouritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <Navigation />
                  <ExpoStatusBar style="auto" />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavouritesContextProvider>
          </AuthenticationContextProvider>
        </ThemeProvider>
      </PaperProvider>
    </>
  );
}
