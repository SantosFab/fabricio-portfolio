"use client";
import { light } from "@/styles/themes/light";
import { dark } from "@/styles/themes/dark";
import { Theme } from "@/styles/themes/Theme";

export type Action = { type: "TOGGLE_THEME" };

export interface InitialState {
  theme: Theme;
}

export const initialState: InitialState = {
  theme: light,
};

export const themeReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme.title === light.title ? dark : light,
      };
    default:
      return state;
  }
};
