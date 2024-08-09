import styled, { css } from "styled-components";

export const StyledInputTheme = styled.label`
  ${({}) => css`
    font-size: 9px;
    position: relative;
    display: flex;
    width: 4.5em;
    cursor: pointer;

    & #toggle {
      opacity: 0;
      width: 0;
      height: 0;
    }

    & #container,
    & #patches,
    & #stars,
    & #button,
    & #sun,
    & #moon,
    & #cloud {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.25s;
    }

    & #toggle:checked + svg #container {
      fill: #2b4360;
    }

    & #toggle:checked + svg #button {
      transform: translate(28px, 2.333px);
    }

    & #sun {
      opacity: 1;
    }

    & #toggle:checked + svg #sun {
      opacity: 0;
    }

    & #moon {
      opacity: 0;
    }

    & #toggle:checked + svg #moon {
      opacity: 1;
    }

    & #cloud {
      opacity: 1;
    }

    & #toggle:checked + svg #cloud {
      opacity: 0;
    }

    & #stars {
      opacity: 0;
    }

    & #toggle:checked + svg #stars {
      opacity: 1;
    }
  `}
`;
