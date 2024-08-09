import styled, { css } from "styled-components";

export const StyledTechnology = styled.h2`
  ${({}) => css`
    width: 300px;
    height: 300px;
    div {
      color: blue;
    }

    p {
      color: pink;
    }
  `}
`;
