import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface SessionContainerProps {
  children: ReactNode;
  isColumn?: boolean;
  isForm?: boolean;
  title?: string;
}

const SessionContainer: FunctionComponent<SessionContainerProps> = ({
  children,
  title,
  isColumn,
  isForm,
}) => {
  return (
    <Styled.StyledSessionContainer>
      <Styled.StyledDiv
        $isColumn={isColumn}
        $isForm={isForm}
        className="container mx-auto"
      >
        {title && <Styled.StyledTitle>{title}</Styled.StyledTitle>}
        {children}
      </Styled.StyledDiv>
    </Styled.StyledSessionContainer>
  );
};

export default SessionContainer;
