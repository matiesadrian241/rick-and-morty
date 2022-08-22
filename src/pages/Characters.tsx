import React from "react";
import withLayout from "../components/Layout/Layout";

export interface ICharactersProps {}

const Characters: React.FunctionComponent<ICharactersProps> = () => {
  return <div>CHARACTERS PAGE</div>;
};

export default withLayout(Characters);
