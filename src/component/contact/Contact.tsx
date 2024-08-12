"use client";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import * as Styled from "./styles";

interface ContacProps {
  title: string;
  body: string;
  icon: IconDefinition;
}

const Contac: FunctionComponent<ContacProps> = ({ title, body, icon }) => {
  return (
    <Styled.StyledContact>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
    </Styled.StyledContact>
  );
};

export default Contac;
