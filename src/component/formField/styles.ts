import styled, { css } from "styled-components";

interface StyledFromFieldProps {
  $oneHundredPercent?: boolean;
}

export const StyledFormField = styled.div<StyledFromFieldProps>`
  ${({ $oneHundredPercent = false, theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${$oneHundredPercent ? "100%" : "47%"};

    & input:focus,
    textarea:focus {
      outline: none;
      box-shadow: none;
      background-color: ${theme.background.color2};
    }

    & small {
      height: 30px;
      padding-left: 15px;
      color: red;
    }

    & textarea {
      height: 250px;
      resize: none;
    }

    & textarea,
    input {
      background-color: ${theme.background.color1};
      border-radius: 31px;
      padding: 10px 15px;
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
  `}
`;
