"use client";
import { light } from "@/styles/themes/light";
import { dark } from "@/styles/themes/dark";
import * as Styled from "./styles";
import { ThemeClient } from "@/lib/ThemeClient";
import { usePersistedState } from "@/utils/usePersistedState";
import { DefaultTheme } from "styled-components";

export default function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () =>
    setTheme((state) => (state.title === light.title ? dark : light));

  return (
    <ThemeClient theme={theme ?? light}>
      <main className="container mx-auto px-4 min-h-screen">
        <Styled.Nav>fabricio test</Styled.Nav>
        <button onClick={() => toggleTheme()}> botão</button>
      </main>
    </ThemeClient>
  );
}
