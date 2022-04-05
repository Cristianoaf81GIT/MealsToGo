import React, { useContext, useState, useEffect } from "react";
// import { View, StatusBar, Platform } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

// const resolveMarginTopInSearchContainer = () => {
//   if (StatusBar.currentHeight && Platform && Platform.OS === "android") {
//     return `${StatusBar.currentHeight}px`;
//   }
//   return "0px";
// };

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

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
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
