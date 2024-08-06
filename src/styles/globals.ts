"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: rgb(${({ theme }) => theme.background.foreground_rgb});
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(${({ theme }) => theme.background.background_end_rgb})
      )
      rgb(${({ theme }) => theme.background.background_start_rgb});
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
