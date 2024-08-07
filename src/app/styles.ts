"use client";
import styled, { css } from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  ${({}) =>
    css`
      display: flex;
      height: 60px;
      justify-content: end;
      align-items: center;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
