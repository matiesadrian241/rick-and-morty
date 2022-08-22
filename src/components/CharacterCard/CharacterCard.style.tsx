import styled from "styled-components";

export const CharacterCardWrapper = styled.div`
  width: 220px;
  height: 220px;
  background: #444444;
  border-radius: 6px;
  transition: 0.5s;
`;

export const ProfilePicture = styled.img`
  width: 40%;
  margin-top: 20px;
  border-radius: 50%;
  transition: 0.5s;
  &:hover {
    width: 100%;
    margin-top: 0;
    border-radius: unset;
    border-radius: 6px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CharacterDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-top: 15px;
  width: 90%;
`;

export const CharacterName = styled.h4`
  margin-bottom: 10px;
  text-align: center;
`;

export const CharacterStatus = styled.div`
  margin-bottom: 20px;
`;
