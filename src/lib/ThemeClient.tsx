"use client";
import { ThemeProvider } from "styled-components";
import { light } from "@/styles/themes/light";
import { ITheme } from "@/styles/themes/ITheme";

interface IThemeClient {
  children: React.ReactNode;
  theme: ITheme;
}

export function ThemeClient({ children, theme }: IThemeClient) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
