import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurants-info.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container} emulateUnlessSupported={true}>
      <ExpoStatusBar style="auto" />
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  search: {
    padding: 16,
    backgroundColor: "white",
    width: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginBottom: 3,
  },
  list: {
    flex: 2,
    backgroundColor: "blue",
    width: "100%",
    padding: 16,
  },
});