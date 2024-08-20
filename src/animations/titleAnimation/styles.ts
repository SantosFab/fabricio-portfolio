import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.h1.responsive};
    @media screen and (max-width: 1024px) {
      font-size: ${theme.fontSize.h1.fixed};
    }
    @media screen and (max-width: 549px) {
      font-size: ${theme.fontSize.h1.smFixed};
    }
  `}
`;
