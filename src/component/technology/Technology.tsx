import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface TechnologyProps {
  title: string;
  animation?: ReactNode;
}

const Technology: FunctionComponent<TechnologyProps> = ({
  title,
  animation,
}) => {
  return (
    <Styled.StyledTechnology>
      <h2>{title}</h2>
      {animation}
    </Styled.StyledTechnology>
  );
};

export default Technology;
