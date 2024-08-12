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
        height={animation === "Flutter" ? 155 : 200}
        width={animation === "Flutter" ? 155 : 200}
        style={{
          position: animation === "Flutter" ? "relative" : "static",
          top: animation === "Flutter" ? "24px" : "",
        }}
      />
    </Styled.StyledLottie>
  );
};

export default LottieAnimation;
