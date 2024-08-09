import styled, { css } from "styled-components";

export const StyledSessionContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.fontColors.four};
    min-height: 85vh;

    &:first-of-type {
      height: calc(100vh - 70px);
    }

    &:nth-child(even) {
      background-color: ${theme.background.color2};
    }
    &:nth-child(odd) {
      background-color: ${theme.background.color1};
    }
  `}
`;

export const StyledDiv = styled.div<{ $isColumn?: boolean }>`
  ${({}) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px;
    min-height: 85vh;
  `}
  flex-direction: ${({ $isColumn = true }) => ($isColumn ? "column" : "row")};
`;

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    padding-bottom: 40px;
    font-size: ${theme.fontSize.subTitleResponse};
    @media (max-width: 1024px) {
      font-size: ${theme.fontSize.subTitleFixed};
    }
  `}
`;
