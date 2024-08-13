"use client";
import * as Styled from "./styles";
import Contact from "@/component/contact/Contact";
import Technology from "@/component/technology/Technology";
import SessionContainer from "@/component/sessionContainer/SessionContainer";
import { TitleAnimation } from "../animations/titleAnimation/TitleAnimation";
import { ToolsLottie } from "../animations/toolsLottie/ToolsLottie";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { AstronautLottie } from "@/animations/astronautLottie/AstronautLotties";
import { useMyFormik } from "@/hook/formik/useMyFormik";

export default function Home() {
  const formik = useMyFormik();
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
          <AstronautLottie />
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
            animation={<ToolsLottie animation="HTML" />}
          />
          <Technology title="CSS" animation={<ToolsLottie animation="CSS" />} />
          <Technology
            title="JavaScript"
            animation={<ToolsLottie animation="JavaScript" />}
          />
          <Technology
            title="Angular"
            animation={<ToolsLottie animation="Angular" />}
          />
          <Technology
            title="Vue"
            animation={<ToolsLottie animation="VueJs" />}
          />
          <Technology
            title="React"
            animation={<ToolsLottie animation="React" />}
          />

          <Technology
            title="Next"
            animation={<ToolsLottie animation="NextJs" />}
          />
          <Technology
            title="Flutter"
            animation={<ToolsLottie animation="Flutter" />}
          />
        </div>
      </SessionContainer>
      <SessionContainer title="Entre em contato">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Nome</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <small className="block h-2 ">
            {formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : null}
          </small>
          <label htmlFor="lastName">Sobrenome</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <small className="block h-2 ">
            {formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : null}
          </small>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <small className="block h-2 ">
            {formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : null}
          </small>
          <button type="submit">Submit</button>
        </form>
      </SessionContainer>
    </main>
  );
}
