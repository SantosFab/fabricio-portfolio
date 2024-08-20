import styled, { css } from "styled-components";
import { StyledLink as ExternalStyledLink } from "@/app/styles";

export const StyledProjectContainer = styled.div`
  ${({ theme }) => css`
    width: 19%;
    margin-left: 0.5%;
    margin-right: 0.5%;
    margin-bottom: 1%;
    height: 450px;
    background-color: ${theme.background.container.dark};
    border-radius: 10px;
    position: relative;

    & img {
      height: 40%;
      width: 100%;
      border-radius: 10px 10px 0 0;
      cursor: pointer;
    }

    & > div:last-of-type:hover {
      opacity: 1;
    }
  `}
`;

export const StyledBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 60%;
    padding: 10px 15px;

    & h2 {
      text-align: center;
      padding-bottom: 5px;
      font-size: ${theme.fontSize.card.title};
    }

    & p {
      text-align: justify;
      font-size: ${theme.fontSize.card.body};
    }
  `}
`;

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

export const StyledTag = styled.div`
  ${({}) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    height: 69px;
    margin-bottom: 5px;
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
