import styled, { css } from "styled-components";
import { StyledLink as ExternalStyledLink } from "@/app/styles";

export const StyledProjectContainer = styled.div`
  ${({ theme }) => css`
    width: 19%;
    margin: 0 0.5% 1% 0.5%;
    height: 410px;
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

    @media screen and (max-width: 1536px) {
      width: 24%;
    }

    @media screen and (max-width: 1280px) {
      width: 30%;
      margin: 0 1.5% 3% 1.5%;
    }

    @media screen and (max-width: 1024px) {
      height: 310px;
      width: 40%;
      margin: 0 5% 5% 5%;

      & img {
        height: 45%;
      }
    }

    @media screen and (max-width: 768px) {
      width: 45%;
      margin: 0 2.5% 5% 2.5%;
      min-height: 330px;
    }
    @media screen and (max-width: 640px) {
      width: 240px;
      margin: 0 auto 10% auto;
      height: 330px;
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

    @media screen and (max-width: 1024px) {
      & h2 {
        font-size: ${theme.fontSize.card.lgTitle};
      }

      & p {
        font-size: ${theme.fontSize.card.lgBody};
      }
    }
  `}
`;

export const StyledLink = styled(ExternalStyledLink)`
  ${({ theme }) => css`
    &:last-of-type {
      color: ${theme.title === "light"
        ? theme.fontColors.one
        : theme.fontColors.four};
      border-color: ${theme.title === "light"
        ? theme.fontColors.one
        : theme.fontColors.four};
    }
    @media screen and (max-width: 640px) {
      padding: 5px 14px;
      font-size: 13px;
    }
  `}
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
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 10;
    @media screen and (max-width: 1024px) {
      top: 45%;
      height: 55%;
    }

    @media screen and (max-width: 1024px) {
    }
  `}
`;

export const StyledTag = styled.div`
  ${({}) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    height: 69px;
    margin-bottom: 5px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  `}
`;
