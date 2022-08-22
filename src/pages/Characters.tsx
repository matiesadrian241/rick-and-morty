import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import withLayout from "../components/Layout/Layout";
import { getCharacters } from "../features/characters";
import CharactersGrid from "../components/CharactersGrid";

export interface ICharactersProps {}

const Characters: React.FunctionComponent<ICharactersProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div>
      <CharactersGrid />
    </div>
  );
};

export default withLayout(Characters);
