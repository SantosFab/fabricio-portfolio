import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.secondary};
    `}
`;
