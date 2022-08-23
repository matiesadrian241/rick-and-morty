import { CharactersGridContainer } from "./CharactersGrid.style";
import { charactersSelector } from "../../features/characters";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useAppSelector } from "../../app/hooks";

/**
 *  Component of Search Characters page which displays a grid of Character Cards in groups of 5/row
 */
const CharactersGrid: React.FC = () => {
  // Retrieves previously stored character details data from redux store
  const charactersData = useAppSelector(charactersSelector) || {};

  const { charactersList } = charactersData;

  return (
    <CharactersGridContainer>
      {Object.entries(charactersList).map(([key, character]) => {
        return (
          <CharacterCard
            key={`${key}-${character.name}`}
            id={parseInt(key)}
            {...character}
          />
        );
      })}
    </CharactersGridContainer>
  );
};

export default CharactersGrid;
