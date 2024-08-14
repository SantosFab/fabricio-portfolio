import React from "react";
import Typewriter from "typewriter-effect";
import * as Styled from "./styles";

export const TitleAnimation = () => {
  return (
    <Styled.StyledTitle>
      <Typewriter
        options={{
          loop: true,
          delay: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2000)
            .typeString("Olá, Sou Fabrício Santos")
            .pauseFor(3000)
            .deleteAll(50)
            .start();
        }}
      />
    </Styled.StyledTitle>
  );
};
