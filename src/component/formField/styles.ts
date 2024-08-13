import styled, { css } from "styled-components";

interface StyledFromFieldProps {
  $widthFiftyPercent?: boolean;
}

export const StyledFormField = styled.div<StyledFromFieldProps>`
  ${({ $widthFiftyPercent = false, theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${$widthFiftyPercent ? "45%" : ""};

    & input:focus,
    textarea:focus {
      outline: none;
      box-shadow: none; /* Remove qualquer sombra padrão no foco */
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
  `}
`;
