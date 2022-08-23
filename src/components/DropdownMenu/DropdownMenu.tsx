import React, { useRef, useState, MouseEvent } from "react";
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

const DropdownMenu: React.FC = () => {
  const statuses: JSON = {
    ALIVE: "alive",
    DEAD: "dead",
    UNKNOWN: "unknown",
    NONE: "",
  };

  const dropdownRef = useRef(null);

  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  const onItemClick = (event: MouseEvent<HTMLLIElement>) => {
    const selectedElement = event.target as HTMLElement;

    setIsActive(!isActive);
    dispatch(setSearchedCharacterStatus(statuses[selectedElement.innerHTML]));
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={onClick} className="menu-trigger">
        <DropdownMenuText>Character status</DropdownMenuText>
      </DropdownButton>
      <Nav
        ref={dropdownRef}
        active={isActive}
        className={`menu-${isActive ? "active" : "inactive"}`}
      >
        <DropdownList>
          {Object.entries(statuses).map(([key]) => {
            return <DropdownItem onClick={onItemClick}>{key}</DropdownItem>;
          })}
        </DropdownList>
      </Nav>
    </DropdownWrapper>
  );
};

export default DropdownMenu;
