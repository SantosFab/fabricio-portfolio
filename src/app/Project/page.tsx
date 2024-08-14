"use client";
import * as Styled from "./styles";
import { SessionContainer } from "@/component/sessionContainer/SessionContainer";

export default function Page() {
  return (
    <SessionContainer
      isColumn={false}
      isAlignStart={true}
      isJustifyStart={true}
    >
      <div> test</div>
      <div> test</div>
    </SessionContainer>
  );
}
