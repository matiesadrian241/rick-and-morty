import React from "react";
import { DetailsWrapper } from "./CharacterDetails.style";
import { getCharacterById } from "../../features/characters";
import { useAppSelector } from "../../app/hooks";
import { CharacterDetailsPageType } from "../../utils/charactersTypes";

const CharacterDetails: React.FC<CharacterDetailsPageType> = (props) => {
  const { characterId } = props || {};

  const character = useAppSelector(getCharacterById(characterId)) || {};
  console.log(character, "asd");
  return <DetailsWrapper>{characterId}</DetailsWrapper>;
};

export default CharacterDetails;
