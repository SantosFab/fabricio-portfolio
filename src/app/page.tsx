"use client";
import { light } from "@/styles/themes/light";
import { dark } from "@/styles/themes/dark";
import * as Styled from "./styles";
import { useState } from "react";
import { ThemeClient } from "@/lib/ThemeClient";
export default function Home() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () =>
    setTheme((state) => (state.title === light.title ? dark : light));

  return (
    <ThemeClient theme={theme}>
      <main className="container mx-auto px-4 min-h-screen">
        <Styled.Nav>fabricio test</Styled.Nav>
        <button onClick={() => toggleTheme()}> botão</button>
      </main>
    </ThemeClient>
  );
}
