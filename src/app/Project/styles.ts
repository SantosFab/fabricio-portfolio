import styled, { css } from "styled-components";

export const StyledProject = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.background.layout.light};
    min-height: calc(100vh - 70px);

    & > div {
      padding: 20px 40px 40px 40px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 640px) {
      & > div {
        justify-content: center;
      }
    }
  `}
`;
