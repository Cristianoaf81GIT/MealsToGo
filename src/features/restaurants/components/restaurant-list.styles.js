import React from "react";
import { FlatList } from "react-native";

import styled from "styled-components/native";

export const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: Number(props.theme.space[3].split("px")[0]),
  },
}))``;
