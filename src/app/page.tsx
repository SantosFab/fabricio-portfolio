"use client";
import Contact from "@/component/contact/Contact";
import * as Styled from "./styles";
import Technology from "@/component/technology/Technology";
import SessionContainer from "@/component/sessionContainer/SessionContainer";
import { TitleAnimation } from "../animations/titleAnimation/TitleAnimation";
import Lotties from "../animations/lottie/Lotties";

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
        <div className="hidden lg:flex w-1/2 justify-center items-center bg-slate-300 h-96">
          IMAGEM FIC
        </div>
      </SessionContainer>
      <SessionContainer title="Sobre mim">
        <Styled.StyledParagraph>
          Minha primeira linguagem de programação foi o Dart, mas a linguagem
          que mais domino até o momento é JavaScript/TypeScript. Estudei durante
          um tempo ferramentas Mobile, mas logo migrei para o desenvolvimento
          Web e aqui estou!
        </Styled.StyledParagraph>
        <div className="flex justify-around flex-wrap w-full">
          <Contact title="Nome Completo" body="Fabrício dos Santos"></Contact>
          <Contact title="Telefone de Contato" body="(79) 99672-9791"></Contact>
          <Contact title="GitHub" body="@SantosFab"></Contact>
          <Contact title="E-mail" body="fabriciosantos.dev@gmail.com"></Contact>
        </div>
      </SessionContainer>
      <SessionContainer title="Ferramentas">
        <div className="flex flex-row flex-wrap justify-center">
          <Technology
            title="HTML"
            animation={<Lotties animation="HTML" />}
          ></Technology>
          <Technology
            title="CSS"
            animation={<Lotties animation="CSS" />}
          ></Technology>
          <Technology
            title="JavaScript"
            animation={<Lotties animation="JavaScript" />}
          ></Technology>
          <Technology
            title="React"
            animation={<Lotties animation="React" />}
          ></Technology>
          <Technology
            title="Next"
            animation={<Lotties animation="NextJs" />}
          ></Technology>
          <Technology
            title="Vue"
            animation={<Lotties animation="VueJs" />}
          ></Technology>
          <Technology
            title="Angular"
            animation={<Lotties animation="Angular" />}
          ></Technology>
          <Technology
            title="Flutter"
            animation={<Lotties animation="Flutter" />}
          ></Technology>
        </div>
      </SessionContainer>{" "}
      *
      <SessionContainer title="Entre em contato">
        <div>test</div>
      </SessionContainer>
    </main>
  );
}
