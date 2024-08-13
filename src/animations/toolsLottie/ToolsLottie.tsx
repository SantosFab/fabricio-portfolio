"use client";
import * as Styled from "./styles";
import Lottie from "react-lottie";
import animationData from "./Animation.json";

type animation =
  | "React"
  | "HTML"
  | "CSS"
  | "NextJs"
  | "JavaScript"
  | "Flutter"
  | "Angular"
  | "VueJs";

export const ToolsLottie = ({ animation }: { animation: animation }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.animations[animation],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Styled.StyledLottieTools
      $isFlutter={animation === "Flutter" ? true : false}
    >
      <Lottie options={defaultOptions} />
    </Styled.StyledLottieTools>
  );
};
