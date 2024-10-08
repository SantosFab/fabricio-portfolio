"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.fontColors.four};
    background-color: ${({ theme }) => theme.background.layout.dark};
  }
`;

export default GlobalStyles;

/*  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-start-rgb: 0, 0, 0;
      --background-end-rgb: 0, 0, 0;
    }
  } */
