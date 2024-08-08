import { FunctionComponent } from "react";

interface ContacProps {
  title: string;
  body: string;
}

const Contac: FunctionComponent<ContacProps> = ({ title, body }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Contac;
