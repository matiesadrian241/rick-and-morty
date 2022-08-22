import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import withLayout from "../components/Layout/Layout";
import { getCharacters } from "../features/characters";

export interface ICharactersProps {}

const Characters: React.FunctionComponent<ICharactersProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return <div>CHARACTERS PAGE</div>;
};

export default withLayout(Characters);
