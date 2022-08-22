export type CharactersResultList = {
  results: Array<PayloadCharacterType>;
  info: PageInfoType;
};

type PageInfoType = {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;
};

type NameAndURL = {
  name?: string;
  url?: string;
};

export type CharacterType = {
  name?: string;
  status?: string;
  species?: string;
  episodes?: Array<string>;
  gender?: string;
  image?: string;
  location?: string;
  origin?: string;
};

export type CharacterSearchPageState = {
  charactersList: { [key: number]: CharacterType };
  currentPageNumber: number;
  totalPages: number;
  totalCharacters: number;
  charactersFound: number;
  nextPageUrl: string;
  searchedValue: string;
  previousPageUrl: string;
  pending: boolean;
  error: boolean;
};

type PayloadCharacterType = {
  created?: string;
  name?: string;
  episode?: Array<string>;
  gender?: string;
  id: number;
  image?: string;
  location?: NameAndURL;
  origin?: NameAndURL;
  species?: string;
  status?: string;
  type?: string;
  url?: string;
};
