import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk("characters", async () => {
  const response = await axios
    .get(`${process.env.REACT_APP_GET_CHARACTERS}`)
    .then((data) => data)
    .catch((error) => {
      return error;
    });

  return response.data;
});
