"use client";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { DefaultTheme } from "styled-components/dist/types";

interface ThemeClientProps {
  children: ReactNode;
  theme: DefaultTheme;
}

export function ThemeClient({ children, theme }: ThemeClientProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
