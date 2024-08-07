import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeProvider } from "@/reducer/Theme/ThemeProvider";
import Button from "@/component/Button";
import * as Styled from "./styles";
import "../styles/tailwinds.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio do desenvolvedor Fabrício Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} container mx-auto px-4 min-h-screen`}
      >
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Styled.Nav>
              <Styled.StyledLink href={"/"}>Início</Styled.StyledLink>
              <Styled.StyledLink href={"/About"}>Sobre</Styled.StyledLink>
              <Styled.StyledLink href={"/Project"}>Projeto</Styled.StyledLink>
              <Button />
            </Styled.Nav>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
