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



 /*useEffect(() => {
    let mounted = true;
    if (mounted && app && !isAuthenticated) {
      signInWithEmailAndPassword(auth, "user@user.com", "123456")
        .then((userCredential) => {
          console.log(userCredential);
          setIsAuthenticated(true);
        }).catch((error) => console.log(error));
    }
    return () => { mounted = false };
  },[app, isAuthenticated])*/

 /*if (app && !isAuthenticated) {
  signInWithEmailAndPassword(auth, "userEmailHere@email.com", "yourAwesomePasswordHere")
  .then((userCredential) => {
    console.log(userCredential);
    setIsAuthenticated(true);
   }).catch((error) => console.log(error));
  }*/

  
  return (
    <>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider theme={theme}>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
                <ExpoStatusBar style="auto" />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </ThemeProvider>
      </PaperProvider>
    </>
  );
}
