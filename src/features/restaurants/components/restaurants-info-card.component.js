import React from "react";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../typography/text.component";
import { generate } from "../../../utils/keygenerator";

import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Icon,
  Address,
  Info,
  Rating,
  RestaurantCardCover,
  Section,
  SectionEnd,
  RestaurantCard,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://i.pinimg.com/originals/6f/a6/27/6fa6279dd1ac18f07fcbdd7700aab14b.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_index) => (
              <SvgXml xml={star} width={20} height={20} key={`${generate()}`} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
