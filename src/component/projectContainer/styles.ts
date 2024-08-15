import styled, { css } from "styled-components";
import { StyledLink as ExternalStyledLink } from "@/app/styles";

// Container principal do projeto
export const StyledProjectContainer = styled.div`
  ${({ theme }) => css`
    width: 24%;
    margin-left: 0.5%;
    margin-right: 0.5%;
    margin-bottom: 1%;
    height: 400px;
    background-color: ${theme.background.color2};
    border-radius: 10px;
    position: relative;

    & img {
      height: 40%;
      width: 100%;
      border-radius: 10px 10px 0 0;
      background-color: red;
    }

    & > div:last-of-type:hover {
      opacity: 1;
    }
  `}
`;

// Corpo do projeto com título e descrição
export const StyledBody = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
    padding: 15px;

    & h2 {
      text-align: center;
      padding-bottom: 10px;
    }

    & p {
      text-align: justify;
    }
  `}
`;

// Estilização dos links
export const StyledLink = styled(ExternalStyledLink)`
  ${({ theme }) => css``}
`;

export const LinksContainer = styled.div`
  ${({}) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    width: 100%;
    height: 60%;
    border-radius: 0 0 10px 10px;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 10;
  `}
`;

/* @media screen and (max-width: 1536px) {
      margin: 25px;
    }

    @media screen and (max-width: 1280px) {
      margin: 16px 32px;
    }
    @media screen and (max-width: 1024px) {
      width: 210px;
      height: 230px;
      & a {
        font-size: 12px;
      }
    }
    @media screen and (max-width: 768px) {
      margin: 25px 31px;
    } */
