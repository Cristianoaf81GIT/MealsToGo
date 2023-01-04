import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const resolveSaveAreaMarginTop = () => {
  if (StatusBar.currentHeight) {
    return `${StatusBar.currentHeight}px`;
  }
  return "initial";
};

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${resolveSaveAreaMarginTop()};
  background-color: ${props => props.theme.colors.bg.primary};
`;
