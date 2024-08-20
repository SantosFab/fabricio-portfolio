import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface SessionContainerProps {
  title?: string;
  children: ReactNode;
  isColumn?: boolean;
  isJustifyStart?: boolean;
  isAlignStart?: boolean;
}

export const SessionContainer: FunctionComponent<SessionContainerProps> = ({
  children,
  title,
  isColumn,
  isJustifyStart,
  isAlignStart,
}) => {
  return (
    <Styled.StyledSessionContainer>
      <Styled.StyledDiv
        $isColumn={isColumn}
        $isJustifyStart={isJustifyStart}
        $isAlignStart={isAlignStart}
        className="container mx-auto"
      >
        {title && <Styled.StyledTitle>{title}</Styled.StyledTitle>}
        {children}
      </Styled.StyledDiv>
    </Styled.StyledSessionContainer>
  );
};
