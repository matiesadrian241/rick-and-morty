import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import withLayout from "../components/Layout/Layout";
import { getCharacters, charactersSelector } from "../features/characters";
import CharactersGrid from "../components/CharactersGrid";
import SearchBar from "../components/SearchBar";
import { CharactersPageWrapper } from "../components/CharactersPageComponents/CharactersPageComponents.style";

export interface ICharactersProps {}

const Characters: React.FunctionComponent<ICharactersProps> = () => {
  const dispatch = useAppDispatch();

  const { searchedValue } = useAppSelector(charactersSelector) || {};
  useEffect(() => {
    dispatch(getCharacters({ searchedValue }));
  }, [dispatch, searchedValue]);

  return (
    <CharactersPageWrapper>
      <SearchBar />
      <CharactersGrid />
    </CharactersPageWrapper>
  );
};

export default withLayout(Characters);
