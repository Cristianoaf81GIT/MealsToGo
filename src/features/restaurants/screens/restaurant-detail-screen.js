import React from "react";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";

import { SafeArea } from "../../../utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
