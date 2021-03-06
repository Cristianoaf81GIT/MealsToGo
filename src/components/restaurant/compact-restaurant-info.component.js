import React from "react";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { View, Image, Platform } from "react-native";
import { Text } from "../typography/text.component";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const ImageInfo = isAndroid && isMap ? CompactWebview : CompactImage;
  console.log(restaurant.photos[0], "imagem");
  return (
    <Item>
      <ImageInfo source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
