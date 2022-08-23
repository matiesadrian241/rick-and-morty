import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  charactersSelector,
  increment,
  decrement,
} from "../../features/characters";
import {
  CHARACTERS_PER_PAGE_LIMIT,
  NO_CHARACTERS,
} from "../../utils/constants";
import {
  NavBarButton,
  PageNumber,
  NavBarWrapper,
  NavBarNoResults,
} from "./NavBar.style";

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const charactersData = useAppSelector(charactersSelector) || {};

  const {
    currentPageNumber,
    totalPages,
    previousPageUrl,
    nextPageUrl,
    charactersFound,
  } = charactersData;

  return (
    <>
      {charactersFound === CHARACTERS_PER_PAGE_LIMIT ? (
        <NavBarWrapper>
          <NavBarButton
            disabled={!previousPageUrl}
            onClick={() => dispatch(decrement())}
          >
            Previous page
          </NavBarButton>
          <PageNumber>
            page {currentPageNumber} of {totalPages}
          </PageNumber>
          <NavBarButton
            disabled={!nextPageUrl}
            onClick={() => dispatch(increment())}
          >
            Next page
          </NavBarButton>
        </NavBarWrapper>
      ) : (
        charactersFound === NO_CHARACTERS && (
          <NavBarNoResults>Oups.. no characters found</NavBarNoResults>
        )
      )}
    </>
  );
};

export default NavBar;
