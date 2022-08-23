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

/**
 *  Page navigator component used within Characters page to navigate between sets of characters
 *  Previous / Next buttons will trigger an increment / decrement action, which will further generate a new retrieve characters API request to fetch a new set of characters
 */
const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const charactersData = useAppSelector(charactersSelector) || {};

  // We keep track of used filters and use latest data from redux store to make it responsive
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
