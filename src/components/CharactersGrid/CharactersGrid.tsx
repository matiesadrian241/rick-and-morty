import { CharactersGridContainer } from "./CharactersGrid.style";
import { charactersSelector } from "../../features/characters";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useAppSelector } from "../../app/hooks";

const CharactersGrid: React.FC = () => {
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
