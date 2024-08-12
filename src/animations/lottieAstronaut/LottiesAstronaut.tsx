"use client";
import Lottie from "react-lottie";
import animationData from "./Animation.json";
import * as Styled from "./styles";

export function LottiesAstronaut() {
  const animation = "astronaut";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData[animation],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Styled.StyledLottieAstronaut>
      <Lottie options={defaultOptions}></Lottie>
    </Styled.StyledLottieAstronaut>
  );
}
