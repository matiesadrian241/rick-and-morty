import styled from "styled-components";

type DisplayList = {
  active?: boolean;
};

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  width: 200px;
  height: 50px;
  opacity: 0.9;
  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const Nav = styled.nav<DisplayList>`
  ${({ active }) => (active ? "display: unset;" : "display: none;")};
  position: absolute;
  border-radius: 6px;
  width: 200px;
  height: 50px;
`;
export const DropdownList = styled.ul`
  list-style: none;
  background-color: #dddddd;
  border-radius: 6px;
  padding: 0;
  margin: 0;
`;
export const DropdownItem = styled.li`
  border-bottom: 1px solid white;
  text-decoration: none;
  color: black;
  padding: 15px 20px;
  font-size: 16px;
  display: block;
  opacity: 1;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
export const DropdownMenuText = styled.div`
  font-size: 20px;
  width: 100%;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
