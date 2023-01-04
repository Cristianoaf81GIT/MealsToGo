import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { DefaultTheme } from "react-native-paper";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4fc3f7",
    accent: "#d1c4e9",
  },
};
