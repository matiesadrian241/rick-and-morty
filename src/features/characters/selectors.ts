import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectCharacters = (state: RootState) => state?.characters;

export const charactersSelector = createSelector(
  selectCharacters,
  (state) => state
);

// Method which retrieves specific character details from store, based on character id
export const getCharacterById = (id: number) =>
  createSelector(selectCharacters, (state) => [state?.charactersList[id]]);
