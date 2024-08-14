"use client";
import { ThemeClient } from "@/lib/ThemeClient";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import {
  Action,
  IInitialState,
  initialState,
  themeReducer,
} from "./ThemeReducer";

interface IThemeContextProps {
  state: IInitialState;
  dispatch: Dispatch<Action>;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeClient theme={state.theme}>{children}</ThemeClient>
    </ThemeContext.Provider>
  );
};
