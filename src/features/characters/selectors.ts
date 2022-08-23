import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectCharacters = (state: RootState) => state?.characters;
export const selectEpisodes = (state: RootState) => state?.episodes;

export const charactersSelector = createSelector(
  selectCharacters,
  (state) => state
);

export const episodesSelector = createSelector(
  selectEpisodes,
  (state) => state
);

// Method which retrieves specific character details from store, based on character id
export const getCharacterById = (id: number) =>
  createSelector(selectCharacters, (state) => state?.charactersList[id]);
