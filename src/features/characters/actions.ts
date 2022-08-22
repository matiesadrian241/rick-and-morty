import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CharactersPayload } from "../../utils/charactersTypes";
import axios from "axios";

export const setSearchedValue = createAction<string>(
  "characters/setSearchedValue"
);
export const setSearchedCharacterStatus = createAction<string>(
  "characters/setSearchedCharacterStatus"
);
export const increment = createAction("characters/increment");
export const decrement = createAction("characters/decrement");

export const getCharacters = createAsyncThunk(
  "characters",
  async (payload: CharactersPayload) => {
    const { searchedValue, searchedCharacterStatus, currentPageNumber } =
      payload;

    const nameSearch = searchedValue ? `&name=${searchedValue}` : "";
    const statusSearch = searchedCharacterStatus
      ? `&status=${searchedCharacterStatus}`
      : "";
    const pageSelector =
      currentPageNumber <= 1 ? "" : `&page=${currentPageNumber}`;

    const response = await axios
      .get(
        `${process.env.REACT_APP_GET_CHARACTERS}?${nameSearch}${statusSearch}${pageSelector}`
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });

    return response.data;
  }
);
