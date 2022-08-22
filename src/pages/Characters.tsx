import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import withLayout from "../components/Layout/Layout";
import { getCharacters, charactersSelector } from "../features/characters";
import CharactersGrid from "../components/CharactersGrid";
import SearchBar from "../components/SearchBar";
import DropdownMenu from "../components/DropdownMenu";
import {
  CharactersPageWrapper,
  SearchContainer,
} from "../components/CharactersPageComponents/CharactersPageComponents.style";

export interface ICharactersProps {}

const Characters: React.FunctionComponent<ICharactersProps> = () => {
  const dispatch = useAppDispatch();

  const { searchedValue, searchedCharacterStatus } =
    useAppSelector(charactersSelector) || {};
  useEffect(() => {
    dispatch(getCharacters({ searchedValue, searchedCharacterStatus }));
  }, [dispatch, searchedValue, searchedCharacterStatus]);

  return (
    <CharactersPageWrapper>
      <SearchContainer>
        <SearchBar />
        <DropdownMenu />
      </SearchContainer>
      <CharactersGrid />
    </CharactersPageWrapper>
  );
};

export default withLayout(Characters);
