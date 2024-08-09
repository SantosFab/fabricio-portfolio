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

const LottieAnimation = ({ animation }: { animation: animation }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.animations[animation],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Styled.StyledLottie>
      <Lottie
        options={defaultOptions}
        height={animation === "Flutter" ? 100 : 150}
        width={animation === "Flutter" ? 100 : 150}
      />
    </Styled.StyledLottie>
  );
};

export default LottieAnimation;
