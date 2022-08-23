import React from "react";
import { useParams } from "react-router-dom";
import CharacterDetails from "../components/CharacterDetails/CharacterDetails";
import withLayout from "../components/Layout/Layout";
import { CharacterDetailsPageWrapper } from "../components/CharacterDetailsPageComponents/CharacterDetailsPageComponents.style";

const Profile: React.FunctionComponent = () => {
  //typescript can't destructure generic plain objects like {}
  const { id } = useParams() as any;

  return (
    <CharacterDetailsPageWrapper>
      <CharacterDetails characterId={id} />
    </CharacterDetailsPageWrapper>
  );
};

export default withLayout(Profile);
