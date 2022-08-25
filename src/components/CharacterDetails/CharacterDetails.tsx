import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  DetailsWrapper,
  ProfilePicture,
  HeaderWrapper,
  DataContainer,
  CharacterGenderType,
  EpisodesWrapper,
  CharacterName,
  DetailItem,
  EpisodeItem,
  DetailList,
  SubsectionHeader,
  SubsectionWrapper,
  DetailsAndEpisodesWrapper,
  GoBackButton,
} from "./CharacterDetails.style";
import { getCharacterById, episodesSelector } from "../../features/characters";
import { CharacterDetailsPageType } from "../../utils/charactersTypes";

/**
 *  Component of character details page
 *  Receives data of type CharacterDetailsPageType
 */
const CharacterDetails: React.FC<CharacterDetailsPageType> = memo((props) => {
  const { characterId } = props || {};
  /**
   *  We use getCharacterById selector in combination with characterId to fetch data from redux store
   *  Episode names previously stored at card selection, are also retrieved and displayed as a list here
   */
  const character = useAppSelector(getCharacterById(characterId)) || {};
  const { episodesList } = useAppSelector(episodesSelector) || {};
  const { name, gender, image, location, origin, species, status } = character;

  return (
    <DetailsWrapper>
      <ProfilePicture src={image} />
      <DataContainer>
        <HeaderWrapper>
          <CharacterName>{name}</CharacterName>
          <CharacterGenderType gender={gender}>
            Gender type: {gender}
          </CharacterGenderType>
        </HeaderWrapper>
        <DetailsAndEpisodesWrapper>
          <SubsectionWrapper>
            <SubsectionHeader>Episodes:</SubsectionHeader>
            <EpisodesWrapper>
              {episodesList &&
                Object.entries(episodesList).map(([key, value]) => {
                  return (
                    <EpisodeItem key={`${key}-${value}`}>{value}</EpisodeItem>
                  );
                })}
            </EpisodesWrapper>
          </SubsectionWrapper>
          <SubsectionWrapper>
            <SubsectionHeader>Character details:</SubsectionHeader>
            <DetailList>
              <DetailItem>STATUS: {status}</DetailItem>
              <DetailItem>SPECIES: {species}</DetailItem>
              <DetailItem>LOCATION: {location}</DetailItem>
              <DetailItem>ORIGIN: {origin}</DetailItem>
            </DetailList>
          </SubsectionWrapper>
        </DetailsAndEpisodesWrapper>
      </DataContainer>
      <Link to="/characters">
        <GoBackButton>Go back</GoBackButton>
      </Link>
    </DetailsWrapper>
  );
});

export default CharacterDetails;
