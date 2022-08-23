import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer, episodesReducer } from "../features/characters";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const reducers = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
