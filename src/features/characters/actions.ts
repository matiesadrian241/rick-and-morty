import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CharactersPayload } from "../../utils/charactersTypes";
import axios from "axios";

export const setSearchedValue = createAction<string>(
  "characters/setSearchedValue"
);
export const setSearchedCharacterStatus = createAction<string>(
  "characters/setSearchedCharacterStatus"
);

export const getCharacters = createAsyncThunk(
  "characters",
  async (payload: CharactersPayload) => {
    const { searchedValue, searchedCharacterStatus } = payload;

    const nameSearch = searchedValue ? `?name=${searchedValue}` : "";
    const statusSearch = searchedCharacterStatus
      ? `&status=${searchedCharacterStatus}`
      : "";

    const response = await axios
      .get(
        `${process.env.REACT_APP_GET_CHARACTERS}${nameSearch}${statusSearch}`
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });

    return response.data;
  }
);
