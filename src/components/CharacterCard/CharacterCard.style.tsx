import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: gray;
`;

export const CardContainer = styled.div``;

export const Card = styled.div`
  width: 100%;
  bottom: 0px;
  height: 100%;
`;

export const ProfilePicture = styled.img`
  width: 50%;
  position: absolute;
  padding-left: 50%;
  padding-right: 50%;
  margin-top: 20px;
  border-radius: 50%;
`;

export const DataContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CharacterDetailsWrapper = styled.span`
  position: absolute;
  bottom: 0;
  border-radius: 6px;
  width: 100%;
  text-align: center;
`;

export const CharacterName = styled.h3`
  margin-bottom: 0px;
`;

export const CharacterStatus = styled.p`
  margin: 14px auto;
`;
