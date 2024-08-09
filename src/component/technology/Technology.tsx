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
      <p>{title}</p>
      {animation}
    </Styled.StyledTechnology>
  );
};

export default Technology;
