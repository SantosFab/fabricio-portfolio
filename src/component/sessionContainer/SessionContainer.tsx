import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface SessionContainerProps {
  children: ReactNode;
  title?: string;
}

const SessionContainer: FunctionComponent<SessionContainerProps> = ({
  children,
  title,
}) => {
  return (
    <Styled.StyledSessionContainer>
      <Styled.StyledDiv className="container mx-auto">
        {title && <Styled.StyledTitle>{title}</Styled.StyledTitle>}
        {children}
      </Styled.StyledDiv>
    </Styled.StyledSessionContainer>
  );
};

export default SessionContainer;
