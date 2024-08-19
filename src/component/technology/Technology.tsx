import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface TechnologyProps {
  title: string;
  animation?: ReactNode;
}

export const Technology: FunctionComponent<TechnologyProps> = ({
  title,
  animation,
}) => {
  return (
    <Styled.StyledTechnology>
      <h3>{title}</h3>
      {animation}
    </Styled.StyledTechnology>
  );
};
