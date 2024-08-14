import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.titleResponse};
    @media screen and (max-width: 1024px) {
      font-size: ${theme.fontSize.titleFixed};
    }
    @media screen and (max-width: 549px) {
      font-size: ${theme.fontSize.subTitleFixed};
    }
  `}
`;
