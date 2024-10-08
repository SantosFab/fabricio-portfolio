import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface FormFieldProps {
  type?: string;
  name?: string;
  touched?: boolean;
  errorMessage?: string;
  children?: ReactNode;
  value?: string;
  placeHolder?: string;
  oneHundredPercent?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: FunctionComponent<FormFieldProps> = ({
  type,
  name,
  touched,
  errorMessage,
  children,
  value,
  placeHolder,
  oneHundredPercent,
  onChange,
}) => {
  return (
    <Styled.StyledFormField $oneHundredPercent={oneHundredPercent}>
      {children ? (
        children
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeHolder}
        />
      )}
      <small className="block">
        {touched && errorMessage ? errorMessage : null}
      </small>
    </Styled.StyledFormField>
  );
};
