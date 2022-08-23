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
import { getCharacterById } from "../../features/characters";
import { CharacterDetailsPageType } from "../../utils/charactersTypes";

/**
 *  Component of character details page
 *  Receives data of type CharacterDetailsPageType
 */
const CharacterDetails: React.FC<CharacterDetailsPageType> = memo((props) => {
  const { characterId } = props || {};
  /**
   *  We use getCharacterById selector with the help of characterId, received from Characters Page, to fetch data from redux store
   *  An alternative to this approach would be to make an API request to fetch character details, but it is not neccessary in our case
   *  The second option would not be the best approach, as we already receive needed data on https://rickandmortyapi.com/api/character
   */
  const character = useAppSelector(getCharacterById(characterId)) || {};

  const { episodes, name, gender, image, location, origin, species, status } =
    character;

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
              {Array.isArray(episodes) &&
                episodes.length > 0 &&
                episodes.map((episode: string, index: number) => {
                  return (
                    <EpisodeItem key={`${episode}-${index}`}>
                      {episode}
                    </EpisodeItem>
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
