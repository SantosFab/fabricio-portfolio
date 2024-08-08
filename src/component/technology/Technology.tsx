import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface TechnologyProps {
  title: string;
}

const Technology: FunctionComponent<TechnologyProps> = ({ title }) => {
  return (
    <Styled.StyledTechnology>
      <div>IMGFic</div>
      <p>{title}</p>
    </Styled.StyledTechnology>
  );
};

export default Technology;
