import React, { useRef } from "react";
import { SearchBarInput } from "./SearchBar.style";
import { setSearchedValue } from "../../features/characters";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { charactersSelector } from "../../features/characters";
import { DELAY_SEARCH_MS } from "../../utils/constants";

const SearchBar: React.FC = () => {
  const { searchedValue } = useAppSelector(charactersSelector) || {};

  const dispatch = useAppDispatch();

  const timeout = useRef<any>();

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
