import React from "react";
import MapView from "react-native-maps";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledText = styled(Text)``;

export const MapCallout = ({ restaurant }) => (
  <MapView.Callout>
    <View>
      <StyledText>{restaurant.name}</StyledText>
    </View>
  </MapView.Callout>
);
