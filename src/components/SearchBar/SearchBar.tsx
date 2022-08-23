import React, { useRef } from "react";
import { SearchBarInput } from "./SearchBar.style";
import { setSearchedValue } from "../../features/characters";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { charactersSelector } from "../../features/characters";
import { DELAY_SEARCH_MS } from "../../utils/constants";

/**
 *  Search component used within Characters page to filter based on character name
 *  It uses a debounce period of 300ms, which will not let store to update while typing
 */
const SearchBar: React.FC = () => {
  // We use previously searched value as a default value in case we come back from Character Profile page or refresh current page
  const { searchedValue } = useAppSelector(charactersSelector) || {};

  const dispatch = useAppDispatch();

  // We store timeout value using useRef instead of useState, so it will not re-render in case state changes
  const timeout = useRef<any>();

  // Searched name will be stored 300ms after the user stops writing
  // This will also further generate a new retrieve characters API request to fetch a new set of characters
  const debounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      dispatch(setSearchedValue(e.target.value));
    }, DELAY_SEARCH_MS);
  };

  return (
    <div>
      <SearchBarInput
        defaultValue={searchedValue}
        onChange={debounce}
      ></SearchBarInput>
    </div>
  );
};

export default SearchBar;
