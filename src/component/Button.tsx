"use client";
import { useTheme } from "@/reducer/Theme/ThemeProvider";
import { ThemeType } from "@/styles/themes/ITheme";
import { usePersistedState } from "@/utils/usePersistedState";
import { FunctionComponent, useLayoutEffect } from "react";

interface ButtonThemeProps {}

const ButtonTheme: FunctionComponent<ButtonThemeProps> = () => {
  const { state, dispatch } = useTheme();
  const [theme, setTheme] = usePersistedState<ThemeType>(
    "theme",
    state.theme.title
  );

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
    setTheme(() => (state.theme.title === "light" ? "dark" : "light"));
  };

  useLayoutEffect(() => {
    if (state.theme.title !== theme) {
      dispatch({ type: "TOGGLE_THEME" });
    }
  }, [dispatch, state.theme.title, theme]);

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
    >
      Theme
    </button>
  );
};

export default ButtonTheme;
