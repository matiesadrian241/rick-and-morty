import styled from "styled-components";

export const NavBarButton = styled.button`
  width: 200px;
  height: 50px;
  background: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  opacity: 0.9;
  text-align: center;
  font-size: 20px;
  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const PageNumber = styled.div`
  border-radius: 6px;
  text-align: center;
  font-size: 34px;
  vertical-align: middle;
  color: white;
  width: 220px;
  height: 50px;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

export const NavBarNoResults = styled.div`
  border-radius: 6px;
  text-align: center;
  font-size: 34px;
  vertical-align: middle;
`;
