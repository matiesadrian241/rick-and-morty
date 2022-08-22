import React from "react";
import withLayout from "../components/Layout/Layout";

export interface ICharacterProfileProps {}

const CharacterProfile: React.FunctionComponent<
  ICharacterProfileProps
> = () => {
  return <div>CHARACTER PROFILE</div>;
};

export default withLayout(CharacterProfile);
