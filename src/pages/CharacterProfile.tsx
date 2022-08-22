import React from "react";
import { useParams, Link } from "react-router-dom";
import CharacterDetails from "../components/CharacterDetails/CharacterDetails";
import withLayout from "../components/Layout/Layout";
import { CharacterDetailsPageWrapper } from "../components/CharacterDetailsPageComponents/CharacterDetailsPageComponents.style";

const Profile: React.FunctionComponent = () => {
  const { id } = useParams();

  return (
    <CharacterDetailsPageWrapper>
      <Link to="/characters">Go back </Link>
      <CharacterDetails characterId={id} />
    </CharacterDetailsPageWrapper>
  );
};

export default withLayout(Profile);
