"use client";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import * as Styled from "./styles";

interface ContacProps {
  title: string;
  body: string;
  icon: IconDefinition;
  href?: string;
}

export const Contact: FunctionComponent<ContacProps> = ({
  title,
  body,
  icon,
  href,
}) => {
  return (
    <Styled.StyledContact>
      {href ? (
        <a href={href} target="_blank">
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
          <h2>{title}</h2>
          <p>{body}</p>
        </a>
      ) : (
        <>
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
          <h2>{title}</h2>
          <p>{body}</p>
        </>
      )}
    </Styled.StyledContact>
  );
};
