import styled, { css } from "styled-components";

export const StyledSessionContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.fontColors.four};
    &:first-of-type {
      min-height: calc(100vh - 70px);
    }

    &:nth-child(even) {
      background-color: ${theme.background.layout.dark};
    }
    &:nth-child(odd) {
      background-color: ${theme.background.layout.light};
    }
  `}
`;

interface StyledDivProps {
  $isColumn?: boolean;
  $isJustifyStart?: boolean;
  $isAlignStart?: boolean;
}

export const StyledDiv = styled.div<StyledDivProps>`
  ${({
    $isColumn = true,
    $isJustifyStart = false,
    $isAlignStart = false,
  }) => css`
    display: flex;
    align-items: ${$isAlignStart ? "start" : "center"};
    flex-wrap: wrap;
    justify-content: ${$isJustifyStart ? "start" : "space-between"};
    padding: 40px;
    min-height: ${$isColumn ? "75vh" : `calc(100vh - 70px)`};
    flex-direction: ${$isColumn ? "column" : "row"};
  `}
`;

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    padding-bottom: 40px;
    font-size: ${theme.fontSize.h2.responsive};
    @media screen and (max-width: 1024px) {
      font-size: ${theme.fontSize.h2.fixed};
    }
  `}
`;
