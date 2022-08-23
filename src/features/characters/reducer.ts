import { createReducer } from "@reduxjs/toolkit";
import {
  getCharacters,
  getEpisodes,
  setSearchedValue,
  setSearchedCharacterStatus,
  increment,
  decrement,
} from "./actions";
import {
  CharactersResultList,
  CharacterType,
  CharacterSearchPageState,
  EpisodesListState,
  EpisodeElementType,
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

const episodesInitialState: EpisodesListState = {
  episodesList: {} as Record<string, string>,
  pending: false,
  error: false,
};

/**
 * Method used to define the elements from charactersList, having the following type <Id of the character, Character Details>
 * This will further help us fetch specific character details from store based on character id
 * @param payload of type CharactersResultList
 * @returns a record of type <number, CharacterType>
 */
const extractCharacterValues = (payload: CharactersResultList) => {
  if (payload && payload.results) {
    const { results } = payload;
    return results.map((item) => {
      const newItem = {
        [item.id as number]: {
          name: item?.name ?? "",
          status: item?.status ?? "",
          species: item?.species ?? "",
          episodes: extractEpisodeIds(item?.episode) ?? [],
          gender: item?.gender ?? "",
          image: item?.image ?? "",
          location: item?.location?.name ?? "",
          origin: item?.origin?.name ?? "",
        },
      };
      return newItem;
    });
  }
  return [];
};

//  As the episode list received on retrieve characters request is formed out of URLs, we should only store episodes ids in our store
const extractEpisodeIds = (episode: Array<string>) => {
  if (Array.isArray(episode) && episode.length > 0) {
    return episode.map((episode: string) => {
      return episode.split("/").pop() || "";
    });
  }

  return [];
};

const extractEpisodeNames = (
  payload: Array<EpisodeElementType> | EpisodeElementType
) => {
  if (Array.isArray(payload) && payload.length > 0) {
    return payload.map((item) => {
      const newItem = {
        [item.id]: item?.name ?? "",
      };

      return newItem;
    });
  } else if (payload && typeof payload === "object") {
    const episodeElement = payload as EpisodeElementType;
    const newItem = {
      [episodeElement?.id]: episodeElement?.name ?? "",
    };

    return [newItem];
  }
  return [];
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

export const episodesReducer = createReducer(
  episodesInitialState,
  (builder) => {
    builder
      .addCase(getEpisodes.pending, (state) => {
        state.pending = true;
      })
      .addCase(getEpisodes.fulfilled, (state, { payload }) => {
        state.episodesList = extractEpisodeNames(payload).reduce(
          (acc, item) => {
            return { ...acc, ...item };
          },
          {}
        );
        state.pending = false;
      })
      .addCase(getEpisodes.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  }
);

export default charactersReducer;
