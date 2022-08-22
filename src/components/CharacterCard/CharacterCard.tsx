import { Link } from "react-router-dom";
import {
  Box,
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
      <Box>
        <DataContainer>
          <ProfilePicture src={image} />
          <CharacterDetailsWrapper>
            <CharacterName>{name}</CharacterName>
            <CharacterStatus>{status}</CharacterStatus>
          </CharacterDetailsWrapper>
        </DataContainer>
      </Box>
    </Link>
  );
};
export default CharacterCard;
