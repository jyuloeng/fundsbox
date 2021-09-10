declare type ThemeType = "light" | "dark";

declare type ThemeColors = {
  text: string;
  text2: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  background: string;
  background2: string;
  cardShadow: string;
};

declare type SystemTheme = {
  colors: ThemeColors;
};

declare type SystemThemes = {
  [key in ThemeType]: SystemTheme;
};
