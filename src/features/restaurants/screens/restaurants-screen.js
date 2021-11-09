import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  margin-bottom: 3px;
  ${StatusBar.currentHeight && Platform && Platform.OS === "android"
    ? `margin-top: ${StatusBar.currentHeight}px`
    : "margin-top: 0px"}
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea emulateUnlessSupported={true}>
      <ExpoStatusBar style="auto" />
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => String(item.name)}
        contentContainerStyle={{ padding: 32 }}
      />
    </SafeArea>
  );
};
