import {
  lightPrimaryColor,
  lightText2Color,
  lightTextColor,
  successColor,
  warningColor,
  dangerColor,
  lightBackgroundColor,
  lightBackground2Color,
  lightCardShadowColor,
  darkTextColor,
  darkText2Color,
  darkPrimaryColor,
  darkBackgroundColor,
  darkBackground2Color,
  darkCardShadowColor,
} from "@styles/colors";

export const themes: SystemThemes = {
  light: {
    colors: {
      text: lightTextColor,
      text2: lightText2Color,
      primary: lightPrimaryColor,
      success: successColor,
      warning: warningColor,
      danger: dangerColor,
      background: lightBackgroundColor,
      background2: lightBackground2Color,
      cardShadow: lightCardShadowColor,
    },
  },
  dark: {
    colors: {
      text: darkTextColor,
      text2: darkText2Color,
      primary: darkPrimaryColor,
      success: successColor,
      warning: warningColor,
      danger: dangerColor,
      background: darkBackgroundColor,
      background2: darkBackground2Color,
      cardShadow: darkCardShadowColor,
    },
  },
};
