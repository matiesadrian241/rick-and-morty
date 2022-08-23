import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import withLayout from "../components/Layout/Layout";
import { getCharacters, charactersSelector } from "../features/characters";
import CharactersGrid from "../components/CharactersGrid";
import SearchBar from "../components/SearchBar";
import DropdownMenu from "../components/DropdownMenu";
import NavBar from "../components/NavBar";
import {
  CharactersPageWrapper,
  SearchContainer,
} from "../components/CharactersPageComponents/CharactersPageComponents.style";

export interface ICharactersProps {}

const Characters: React.FunctionComponent<ICharactersProps> = () => {
  const dispatch = useAppDispatch();

  const { searchedValue, searchedCharacterStatus, currentPageNumber } =
    useAppSelector(charactersSelector) || {};

  // Generate a new fetch character list API requests every time one of searchedValue, searchedCharacterStatus or currentPageNumber parameters change
  useEffect(() => {
    dispatch(
      getCharacters({
        searchedValue,
        searchedCharacterStatus,
        currentPageNumber,
      })
    );
  }, [dispatch, searchedValue, searchedCharacterStatus, currentPageNumber]);

  return (
    <CharactersPageWrapper>
      <SearchContainer>
        <SearchBar />
        <DropdownMenu />
      </SearchContainer>
      <CharactersGrid />
      <NavBar />
    </CharactersPageWrapper>
  );
};

export default withLayout(Characters);
