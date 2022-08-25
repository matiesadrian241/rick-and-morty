import { memo } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getEpisodes, getCharacterById } from "../../features/characters";
import { Link } from "react-router-dom";
import {
  CharacterCardWrapper,
  ProfilePicture,
  DataContainer,
  CharacterDetailsWrapper,
  CharacterName,
  CharacterStatus,
} from "./CharacterCard.style";
import { CharacterCardProps } from "../../utils/charactersTypes";

/**
 *  Component of characters grid search page
 *  Receives data of type CharacterCardProps
 */
const CharacterCard: React.FC<CharacterCardProps> = memo(
  ({ image, name, status, id }) => {
    const dispatch = useAppDispatch();
    const { episodes } = useAppSelector(getCharacterById(id)) || {};

    const extractCharacterValues = () => {
      if (Array.isArray(episodes) && episodes.length > 0) {
        dispatch(getEpisodes(episodes));
      }
    };

    return (
      <Link to={`${id}`} onClick={extractCharacterValues}>
        <CharacterCardWrapper>
          <DataContainer>
            <ProfilePicture src={image} />
            <CharacterDetailsWrapper>
              <CharacterName>{name}</CharacterName>
              <CharacterStatus>{status}</CharacterStatus>
            </CharacterDetailsWrapper>
          </DataContainer>
        </CharacterCardWrapper>
      </Link>
    );
  }
);
export default CharacterCard;
