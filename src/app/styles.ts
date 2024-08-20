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

export const StyledParagraph = styled.div`
  ${({}) => css`
    font-size: ${({ theme }) => theme.fontSize.p.responsive};
    text-align: center;
  `}

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.p.fixed};
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
      background-color: ${theme.background.layout.dark};
      border-color: ${theme.background.layout.dark};
    }
  `}
`;

export const StyledSubmit = styled.button`
  ${({ theme }) => css`
    width: 30%;
    border-radius: 31px;
    padding: 10px;
    background-color: ${theme.background.container.light};
    margin: auto;
    display: block;

    &:hover {
      background-color: ${theme.background.container.dark};
    }
  `}
`;
