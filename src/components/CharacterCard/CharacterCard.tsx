import { memo } from "react";
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
    return (
      <Link to={`${id}`}>
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
