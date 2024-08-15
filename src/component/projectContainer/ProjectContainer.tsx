import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface ProjectContainerProps {}

export const ProjectContainer: FunctionComponent<
  ProjectContainerProps
> = ({}) => {
  return (
    <Styled.StyledProjectContainer>
      <div>IMG do projeto</div>
      <Styled.StyledBody>
        <h2>Nome do projeto</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>
      </Styled.StyledBody>
      <Styled.LinksContainer>
        <Styled.StyledLink href="#preview">Preview</Styled.StyledLink>
        <Styled.StyledLink href="#github">Github</Styled.StyledLink>
      </Styled.LinksContainer>
    </Styled.StyledProjectContainer>
  );
};
