import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectCharacters = (state: RootState) => state?.characters;

export const charactersSelector = createSelector(
  selectCharacters,
  (state) => state
);

export const getCharacterById = (id: number) =>
  createSelector(selectCharacters, (state) => [state?.charactersList[id]]);
