import styled, { css } from "styled-components";

interface LottieToolsProps {
  $isFlutter?: boolean;
}

export const StyledLottieTools = styled.div<LottieToolsProps>`
  ${({ $isFlutter = false }) => css`
    pointer-events: none;
    width: ${$isFlutter ? "115px" : "190x"};
    height: ${$isFlutter ? "115px" : "190px"};

    position: ${$isFlutter ? "relative" : "static"};
    top: ${$isFlutter ? "40px" : ""};

    ,
    @media screen and (max-width: 1280px) {
      width: ${$isFlutter ? "105px" : "150px"};
      height: ${$isFlutter ? "105px" : "150px"};
    }
  `}
`;
