import styled, { css } from "styled-components";
import { Tag } from "./TagContainer";

interface StyledTagContainerProps {
  $tag: Tag;
}

export const StyledTagContainer = styled.div<StyledTagContainerProps>`
  ${({ $tag }) => {
    const backgroundColor = (() => {
      switch ($tag) {
        case "HTML":
          return "#E34F26";
        case "CSS":
          return "#1572B6";
        case "JavaScript":
          return "#F7DF1E";
        case "TypeScript":
          return "#007ACC";
        case "Dart":
          return "#00B4AB";
        case "Flutter":
          return "#02569B";
        case "React":
          return "#61DAFB";
        case "NextJs":
          return "#000000";
        case "VueJs":
          return "#4FC08D";
        case "Angular":
          return "#DD0031";
        case "BootsTrap":
          return "#7952B3";
        case "Tailwinds":
          return "#38B2AC";
        case "Redux":
          return "#764ABC";
        case "Router":
          return "#CA4245";
        default:
          return "#333";
      }
    })();

    return css`
      padding: 6px 10px;
      border-radius: 10px;
      font-size: 14px;
      margin: 3px;
      color: white;
      font-weight: bold;
      display: inline;
      background-color: ${backgroundColor};
    `;
  }}
`;
