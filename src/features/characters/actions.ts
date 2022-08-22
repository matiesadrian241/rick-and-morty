import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CharactersPayload } from "../../utils/charactersTypes";
import axios from "axios";

export const setSearchedValue = createAction<string>(
  "characters/setSearchedValue"
);

export const getCharacters = createAsyncThunk(
  "characters",
  async (payload: CharactersPayload) => {
    const { searchedValue } = payload;

    const nameSearch = searchedValue ? `/?name=${searchedValue}` : "";

    const response = await axios
      .get(`${process.env.REACT_APP_GET_CHARACTERS}${nameSearch}`)
      .then((data) => data)
      .catch((error) => {
        return error;
      });

    return response.data;
  }
);
