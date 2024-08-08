import styled, { css } from "styled-components";

export const StyledSessionContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.fontColors.four};
    min-height: 85vh;
    display: flex;
    justify-content: start;
    align-items: start;
    &:first-of-type {
      height: calc(100vh - 70px);
      align-items: center;
    }

    &:nth-child(even) {
      background-color: ${theme.background.color2};
    }
    &:nth-child(odd) {
      background-color: ${theme.background.color1};
    }
  `}
`;

export const StyledDiv = styled.div`
  ${({}) => css`
    display: flex;
    padding: 0 40px;
  `}
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    display: inline;
    font-size: ${theme.fontSize.title2};
    @media (max-width: 1024px) {
      font-size: ${theme.fontSize.title3};
    }
  `}
`;
