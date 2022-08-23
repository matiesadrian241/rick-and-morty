import styled from "styled-components";

export const CharacterCardWrapper = styled.div`
  width: 220px;
  height: 260px;
  background: #444444;
  border-radius: 6px;
  transition: 0.5s;
`;

export const ProfilePicture = styled.img`
  width: 40%;
  margin: 20px 0;
  border-radius: 50%;
  transition: 0.5s;
  &:hover {
    width: 260px;
    margin-top: 0;
    border-radius: 6px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  align-items: center;
`;

export const CharacterDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  border-radius: 6px;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const CharacterName = styled.h4`
  margin-bottom: 10px;
  text-align: center;
`;

export const CharacterStatus = styled.div`
  margin-bottom: 20px;
`;
