"use client";
import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav`
  ${({}) =>
    css`
      display: flex;
      height: 70px;
      justify-content: end;
      align-items: center;
      padding: 0 40px;
    `}
`;

export const StyledNavegation = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    &:hover {
      color: ${theme.fontColors.two};
    }
  `}
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.title1};
    @media (max-width: 1024px) {
      font-size: ${theme.fontSize.title2};
    }
  `}
`;

interface ParagraphProps {
  $fontSize?: string;
}

export const StyledParagraph = styled.div<ParagraphProps>`
  ${({}) => css``}
  font-size: ${({ $fontSize }) => $fontSize || "16px"};

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const StyledLink = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    margin-top: 10px;
    font-size: 15px;
    padding: 6px 16px;
    border: 2px solid ${theme.fontColors.four};

    &:first-of-type {
      margin-right: 20px;
      background-color: ${theme.background.color2};
      border-color: ${theme.background.color2};
    }
  `}
`;
