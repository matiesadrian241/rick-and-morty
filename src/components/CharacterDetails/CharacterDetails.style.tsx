import styled from "styled-components";
import { GenderType, JSON } from "../../utils/charactersTypes";

const json: JSON = {
  Male: "blue",
  Female: "pink",
  unknown: "grey",
};

export const DetailsWrapper = styled.div`
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 1500px;
  display: flex;
  margin: auto;
  margin-top: 30px;
`;

export const ProfilePicture = styled.img`
  width: 40%;
  border-radius: 6px;
  height: auto;
`;

export const DataContainer = styled.div`
  text-align: start;
  width: 60%;
  border-radius: 6px;
  height: auto;
  padding: 0 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CharacterName = styled.h1`
  width: 60%;
  margin-left: 20px;
  color: white;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CharacterGenderType = styled.div<GenderType>`
  ${({ gender }) => {
    if (gender) {
      return "background-color: " + json[gender] + ";";
    }
  }};
  height: 30px;
  border-radius: 6px;
  margin: 20px 20px 0 0;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 10px 20px;
`;

export const EpisodesWrapper = styled.ul`
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 50px;
  border-radius: 6px;
  max-height: 370px;
  overflow: scroll;
`;

export const DetailItem = styled.li``;

export const EpisodeItem = styled.li``;

export const DetailList = styled.ul`
  margin-left: 20px;
  line-height: 40px;
  max-width: 300px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 50px;
  border-radius: 6px;
`;

export const SubsectionHeader = styled.h2`
  margin-left: 20px;
`;

export const SubsectionWrapper = styled.div``;

export const DetailsAndEpisodesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

export const GoBackButton = styled.div`
  position: absolute;
  left: 20px;
  height: 60px;
  width: 120px;
  border-radius: 6px;
  margin-left: 20px;
  background-color: #dddddd;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  vertical-align: middle;
`;
