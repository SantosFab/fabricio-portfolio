"use client";
import Contact from "@/component/contact/Contact";
import * as Styled from "./styles";
import Technology from "@/component/technology/Technology";
import SessionContainer from "@/component/sessionContainer/SessionContainer";
import { TitleAnimation } from "../animations/titleAnimation/TitleAnimation";
import { LottieTools } from "../animations/lottieTools/LottieTools";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LottiesAstronaut } from "@/animations/lottieAstronaut/LottiesAstronaut";

export default function Home() {
  return (
    <main className="">
      <SessionContainer isColumn={false}>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <Styled.StyledTitle>
            <TitleAnimation />
          </Styled.StyledTitle>
          <Styled.StyledParagraph>
            Desenvolvedor Front-end com foco em desenvolvimento Web
          </Styled.StyledParagraph>
          <div>
            <Styled.StyledLink>Dowload CV</Styled.StyledLink>
            <Styled.StyledLink
              href="https://www.linkedin.com/in/fabriciosantosdev/"
              target="_blank"
            >
              LinkedIn
            </Styled.StyledLink>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2 justify-center items-center">
          <LottiesAstronaut />
        </div>
      </SessionContainer>
      <SessionContainer title="Sobre mim">
        <Styled.StyledParagraph>
          Minha primeira linguagem de programação foi o Dart, mas a linguagem
          que mais domino até o momento é JavaScript/TypeScript. Estudei durante
          um tempo ferramentas Mobile, mas logo migrei para o desenvolvimento
          Web e aqui estou!
        </Styled.StyledParagraph>
        <div className="flex justify-around  flex-wrap w-full">
          <Contact
            title="Nome Completo"
            body="Fabrício dos Santos"
            icon={faIdCard}
          />
          <Contact
            title="Telefone de Contato"
            body="(79) 99672-9791"
            icon={faMobileScreenButton}
          />
          <Contact title="GitHub" body="@SantosFab" icon={faGithub} />
          <Contact
            title="E-mail"
            body="fabriciosantos.dev@gmail.com"
            icon={faEnvelope}
          />
        </div>
      </SessionContainer>
      <SessionContainer title="Ferramentas">
        <div className="flex flex-row flex-wrap justify-center">
          <Technology
            title="HTML"
            animation={<LottieTools animation="HTML" />}
          />
          <Technology title="CSS" animation={<LottieTools animation="CSS" />} />
          <Technology
            title="JavaScript"
            animation={<LottieTools animation="JavaScript" />}
          />
          <Technology
            title="Angular"
            animation={<LottieTools animation="Angular" />}
          />
          <Technology
            title="Vue"
            animation={<LottieTools animation="VueJs" />}
          />
          <Technology
            title="React"
            animation={<LottieTools animation="React" />}
          />

          <Technology
            title="Next"
            animation={<LottieTools animation="NextJs" />}
          />
          <Technology
            title="Flutter"
            animation={<LottieTools animation="Flutter" />}
          />
        </div>
      </SessionContainer>{" "}
      <SessionContainer title="Entre em contato">
        <div></div>
      </SessionContainer>
    </main>
  );
}
