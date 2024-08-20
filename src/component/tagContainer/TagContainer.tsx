import { FunctionComponent } from "react";
import * as Styled from "./styles";

export type Tag =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Dart"
  | "Flutter"
  | "React"
  | "NextJs"
  | "VueJs"
  | "Angular"
  | "BootsTrap"
  | "Tailwinds"
  | "Redux"
  | "Router";

interface TagContainerProps {
  tag: Tag;
}

export const TagContainer: FunctionComponent<TagContainerProps> = ({ tag }) => {
  return (
    <Styled.StyledTagContainer $tag={tag}>{tag}</Styled.StyledTagContainer>
  );
};
