import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeProvider } from "@/reducer/Theme/ThemeProvider";
import Input from "@/animations/inputAnimation/InputAnimation";
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
      <body className={`${inter.className} mx-auto min-h-screen`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Styled.StyledNav className="container mx-auto">
              <Styled.StyledNavegation href={"/"}>
                Início
              </Styled.StyledNavegation>
              <Styled.StyledNavegation href={"/"}>
                Projeto
              </Styled.StyledNavegation>
              <Input />
            </Styled.StyledNav>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
