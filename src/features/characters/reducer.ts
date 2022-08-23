import { createReducer } from "@reduxjs/toolkit";
import {
  getCharacters,
  setSearchedValue,
  setSearchedCharacterStatus,
  increment,
  decrement,
} from "./actions";
import {
  CharactersResultList,
  CharacterType,
  CharacterSearchPageState,
} from "../../utils/charactersTypes";

const charactersInitialState: CharacterSearchPageState = {
  charactersList: {} as Record<number, CharacterType>,
  currentPageNumber: 1,
  totalPages: 0,
  totalCharacters: 0,
  charactersFound: 0,
  previousPageUrl: "",
  searchedValue: "",
  searchedCharacterStatus: "",
  nextPageUrl: "",
  pending: false,
  error: false,
};

const extractCharacterValues = (payload: CharactersResultList) => {
  return payload?.results?.map((item) => {
    const newItem = {
      [item.id as number]: {
        name: item?.name ?? "",
        status: item?.status ?? "",
        species: item?.species ?? "",
        episodes: item?.episode ?? [],
        gender: item?.gender ?? "",
        image: item?.image ?? "",
        location: item?.location?.name ?? "",
        origin: item?.origin?.name ?? "",
      },
    };
    return newItem;
  });
};

export const charactersReducer = createReducer(
  charactersInitialState,
  (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.charactersList = extractCharacterValues(payload).reduce(
          (acc, item) => {
            return { ...acc, ...item };
          },
          {}
        );
        state.charactersFound = payload?.results?.length;
        state.totalPages = payload?.info?.pages;
        state.previousPageUrl = payload?.info?.prev;
        state.nextPageUrl = payload?.info?.next;
        state.totalCharacters = payload?.info?.count;
        state.pending = false;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.charactersList = [];
        state.totalCharacters = 0;
        state.charactersFound = 0;
        state.pending = false;
        state.error = true;
      })
      .addCase(setSearchedValue, (state, { payload }) => {
        state.searchedValue = payload;
      })
      .addCase(setSearchedCharacterStatus, (state, { payload }) => {
        state.searchedCharacterStatus = payload;
      })
      .addCase(increment, (state) => {
        state.currentPageNumber++;
      })
      .addCase(decrement, (state) => {
        state.currentPageNumber--;
      });
  }
);

export default charactersReducer;
