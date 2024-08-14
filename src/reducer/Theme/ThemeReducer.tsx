"use client";
import { light } from "@/styles/themes/light";
import { dark } from "@/styles/themes/dark";
import { ITheme } from "@/styles/themes/ITheme";

export type Action = { type: "TOGGLE_THEME" };

export interface IInitialState {
  theme: ITheme;
}

export const initialState: IInitialState = {
  theme: light,
};

export const themeReducer = (state: IInitialState, action: Action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme.title === light.title ? dark : light,
      };
    default:
      return state;
  }
};
