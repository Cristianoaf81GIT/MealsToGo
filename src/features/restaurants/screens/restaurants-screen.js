import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, View, Platform, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

// const resolveMarginTopInSearchContainer = () => {
//   if (StatusBar.currentHeight && Platform && Platform.OS === "android") {
//     return `${StatusBar.currentHeight}px`;
//   }
//   return "0px";
// };

// const SearchContainer = styled(View)`
//   padding: ${(props) => props.theme.space[2]};
//   background-color: ${(props) => props.theme.colors.bg.primary};
//   width: 100%;
//   margin-bottom: 3px;
//   margin-top: ${resolveMarginTopInSearchContainer()};
// `;

const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: Number(props.theme.space[3].split("px")[0]),
  },
}))``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, _error } = useContext(RestaurantsContext);

  // const [searchQuery, setSearchQuery] = React.useState("");
  // const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea emulateUnlessSupported={true}>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <ExpoStatusBar style="auto" />
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => String(item.name)}
      />
    </SafeArea>
  );
};
