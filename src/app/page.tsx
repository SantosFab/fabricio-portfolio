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
import { FormField } from "@/component/formField/FormField";

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
      <SessionContainer title="Entre em contato" isForm={true}>
        <form onSubmit={formik.handleSubmit} className="w-3/4">
          <div className="flex justify-between">
            <FormField
              name="firstName"
              type="text"
              placeHolder="Digite seu nome"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              touched={formik.touched.firstName}
              errorMessage={formik.errors.firstName}
              widthFiftyPercent={true}
            />

            <FormField
              name="lastName"
              type="text"
              placeHolder="Digite seu sobrenome"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              touched={formik.touched.lastName}
              errorMessage={formik.errors.lastName}
              widthFiftyPercent={true}
            />
          </div>
          <FormField
            name="email"
            type="email"
            placeHolder="Digite seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            touched={formik.touched.email}
            errorMessage={formik.errors.email}
          />

          <FormField
            touched={formik.touched.message}
            errorMessage={formik.errors.message}
          >
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Digite sua mensagem"
            />
          </FormField>

          <Styled.StyledSubmit type="submit">Enviar</Styled.StyledSubmit>
        </form>
      </SessionContainer>
    </main>
  );
}
