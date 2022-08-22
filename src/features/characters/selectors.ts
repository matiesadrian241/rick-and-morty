import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectCharacters = (state: RootState) => state?.characters;

export const charactersSelector = createSelector(
  selectCharacters,
  (state) => state
);
