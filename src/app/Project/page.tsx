"use client";
import { ProjectContainer } from "@/component/projectContainer/ProjectContainer";
import * as Styled from "./styles";

export default function Project() {
  return (
    <Styled.StyledProject>
      <div className="container">
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </Styled.StyledProject>
  );
}
