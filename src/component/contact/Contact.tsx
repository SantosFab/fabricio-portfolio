import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface ContacProps {
  title: string;
  body: string;
}

const Contac: FunctionComponent<ContacProps> = ({ title, body }) => {
  return (
    <Styled.StyledContact>
      <h2>{title}</h2>
      <p>{body}</p>
    </Styled.StyledContact>
  );
};

export default Contac;
