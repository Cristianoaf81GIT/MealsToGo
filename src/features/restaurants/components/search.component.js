import React, { useContext, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const resolveMarginTopInSearchContainerAlt = () => {
  return "0px";
};

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  margin-bottom: 3px;
  margin-top: ${resolveMarginTopInSearchContainerAlt()};
`;

export const Search = ({ isFavouriteToggled, onFavouriteToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
