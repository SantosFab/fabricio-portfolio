import styled, { css } from "styled-components";

interface LottieToolsProps {
  $isFlutter?: boolean;
}

export const StyledLottieTools = styled.div<LottieToolsProps>`
  ${({ $isFlutter = false }) => css`
    pointer-events: none;
    width: 150px;
    height: 150px;
    width: ${$isFlutter && "120px"};
    height: ${$isFlutter && "120px"};

    position: ${$isFlutter ? "relative" : "static"};
    top: ${$isFlutter ? "20px" : ""};

    @media screen and (max-width: 1280px) {
      width: 100px;
      height: 100px;
      width: ${$isFlutter && "80px"};
      height: ${$isFlutter && "80px"};
      top: ${$isFlutter ? "15px" : ""};
    }
  `}
`;
