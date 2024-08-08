"use client";
import Contact from "@/component/contact/Contact";
import * as Styled from "./styles";
import Technology from "@/component/technology/Technology";
import SessionContainer from "@/component/sessionContainer/SessionContainer";

export default function Home() {
  return (
    <main className="">
      <SessionContainer>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <Styled.StyledTitle>Olá! Sou Fabrício Santos</Styled.StyledTitle>
          <Styled.StyledParagraph $fontSize="1.1vw">
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
        <p>
          Minha primeira linguagem de programação foi o Dart, mas a linguagem
          que mais domino até o momento é JavaScript/TypeScript. Estudei durante
          um tempo ferramentas Mobile, mas logo migrei para o desenvolvimento
          Web e aqui estou!
        </p>
        <div>
          <Contact title="Nome Completo" body="Fabrício dos Santos"></Contact>
          <Contact title="E-mail" body="fabriciosantos.dev@gmail.com"></Contact>
          <Contact title="GitHub" body="@SantosFab"></Contact>
          <Contact title="Telefone de Contato" body="(79) 99672-9791"></Contact>
        </div>
      </SessionContainer>

      {/*
      <SessionContainer title="Ferramentas">
        <div className="flex flex-row flex-wrap justify-center">
          <Technology title="HTML"></Technology>
          <Technology title="CSS"></Technology>
          <Technology title="TypeScript"></Technology>
          <Technology title="Dart"></Technology>
          <Technology title="React"></Technology>
          <Technology title="Next"></Technology>
          <Technology title="Vue"></Technology>
          <Technology title="Angular"></Technology>
          <Technology title="Flutter"></Technology>
        </div>
      </SessionContainer>
      <SessionContainer title="Entre em contato">
        <div>test</div>
      </SessionContainer> */}
    </main>
  );
}
