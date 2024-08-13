import styled, { css } from "styled-components";

export const StyledSessionContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.fontColors.four};
    &:first-of-type {
      height: calc(100vh - 70px);
    }

    &:nth-child(even) {
      background-color: ${theme.background.color3};
    }
    &:nth-child(odd) {
      background-color: ${theme.background.color1};
    }
  `}
`;

interface StyledDivProps {
  $isColumn?: boolean;
  $isForm?: boolean;
}

export const StyledDiv = styled.div<StyledDivProps>`
  ${({ $isColumn = true, $isForm = false }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: ${$isForm ? "start" : "space-between"};
    padding: 40px;
    min-height: ${$isColumn ? "75vh" : `calc(100vh - 70px)`};
    flex-direction: ${$isColumn ? "column" : "row"};
  `}
`;

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    padding-bottom: 40px;
    font-size: ${theme.fontSize.subTitleResponse};
    @media screen and (max-width: 1024px) {
      font-size: ${theme.fontSize.subTitleFixed};
    }
  `}
`;
