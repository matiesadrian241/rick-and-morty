import React, { useState, MouseEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setSearchedCharacterStatus } from "../../features/characters";
import { JSON } from "../../utils/charactersTypes";
import {
  DropdownWrapper,
  DropdownButton,
  Nav,
  DropdownList,
  DropdownItem,
  DropdownMenuText,
} from "./DropdownMenu.style";

/**
 *  Statuses dropdown component used within Search Characters page for filtering purposes
 */
const DropdownMenu: React.FC = () => {
  // List of entries inside dropdown
  const statuses: JSON = {
    ALIVE: "alive",
    DEAD: "dead",
    UNKNOWN: "unknown",
    NONE: "",
  };

  const dispatch = useAppDispatch();

  // active/inactive state of the dropdown menu
  const [isActive, setIsActive] = useState(false);

  // Sets active/inactive state when clicking on the dropdown component
  const onClick = () => setIsActive(!isActive);

  /**
   *  When clicking on an entry inside this dropdown, we should update the searchedCharacterStatus within redux store
   *  This will further trigger another characters search API request
   */
  const onItemClick = (event: MouseEvent<HTMLLIElement>) => {
    const selectedElement = event.target as HTMLElement;

    // Close dropdown after selecting status
    setIsActive(!isActive);
    dispatch(setSearchedCharacterStatus(statuses[selectedElement.innerHTML]));
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={onClick} className="menu-trigger">
        <DropdownMenuText>Character status</DropdownMenuText>
      </DropdownButton>
      <Nav
        active={isActive}
        className={`menu-${isActive ? "active" : "inactive"}`}
      >
        <DropdownList>
          {Object.entries(statuses).map(([key]) => {
            return (
              <DropdownItem key={`${key}-dropdown-entry`} onClick={onItemClick}>
                {key}
              </DropdownItem>
            );
          })}
        </DropdownList>
      </Nav>
    </DropdownWrapper>
  );
};

export default DropdownMenu;
