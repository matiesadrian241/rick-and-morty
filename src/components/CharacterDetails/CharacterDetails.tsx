import React from "react";
import { DetailsWrapper } from "./CharacterDetails.style";
import { CharacterDetailsPageType } from "../../utils/charactersTypes";

const CharacterDetails: React.FC<CharacterDetailsPageType> = (props) => {
  const { characterId } = props;
  return <DetailsWrapper>{characterId}</DetailsWrapper>;
};

export default CharacterDetails;
