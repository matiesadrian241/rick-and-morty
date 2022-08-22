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

const CharacterCard: React.FC<CharacterCardProps> = ({
  image,
  name,
  status,
  id,
}) => {
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
};
export default CharacterCard;
