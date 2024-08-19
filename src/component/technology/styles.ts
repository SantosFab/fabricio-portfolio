import styled, { css } from "styled-components";

export const StyledTechnology = styled.h3`
  ${({ theme }) => css`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    & h2 {
      font-size: ${theme.fontSize.h3.fixed};
    }
  `}
`;
