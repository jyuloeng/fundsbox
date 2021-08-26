declare namespace Theme {
  type ThemeType = "light" | "dark";

  type Colors = {
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

  type Theme = {
    colors: Colors;
  };

  type Themes = {
    [key in ThemeType]: Theme;
  };
}
