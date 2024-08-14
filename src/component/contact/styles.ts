import styled, { css } from "styled-components";

export const StyledContact = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    border-radius: 50%;

    & a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.background.color1};
      width: 110px;
      height: 110px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    & SVG {
      font-size: 40px;
    }

    @media screen and (max-width: 1280px) {
      margin: 20px;
    }
    @media screen and (max-width: 640px) {
      width: 42%;
    }
  `}
`;
