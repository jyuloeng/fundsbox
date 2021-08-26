import { useState, useMemo, ReactNode, ReactElement } from "react";
import { ThemeProvider as EThemeProvider } from "@emotion/react";

import { createSafeContext, useSafeContext } from "../hooks/useSafeContext";

import { themes } from "../styles/theme";

export type ThemeContextProps = {
  themeType: Theme.ThemeType;
  setThemeType: (theme: Theme.ThemeType) => void;
};

const ThemeContext = createSafeContext<ThemeContextProps>();

export const useTheme = () => useSafeContext(ThemeContext);

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [themeType, setThemeType] =
    useState<ThemeContextProps["themeType"]>("light");

  const value = useMemo(() => ({ themeType, setThemeType }), [themeType]);

  return (
    <ThemeContext.Provider value={value}>
      <EThemeProvider theme={themes[themeType]}>{children}</EThemeProvider>
    </ThemeContext.Provider>
  );
};
