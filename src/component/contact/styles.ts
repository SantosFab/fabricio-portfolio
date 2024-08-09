import styled, { css } from "styled-components";

export const StyledContact = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;

    @media (max-width: 1024px) {
      margin: 20px;
    }
  `}
`;
