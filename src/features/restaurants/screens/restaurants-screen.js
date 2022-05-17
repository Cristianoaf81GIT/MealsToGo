import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => String(item.name)}
      />
    </SafeArea>
  );
};
