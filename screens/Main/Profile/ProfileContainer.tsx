import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { UserType } from "../../../redux/usersSlice";
import ProfilePresenter from "./ProfilePresenter";

interface IProfileContainerProps {
  getMe: () => void;
  me: UserType | null;
}

const IndicatorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ProfileContainer: React.FC<IProfileContainerProps> = ({ getMe, me }) => {
  useEffect(() => {
    getMe();
  }, []);
  if (me) {
    return <ProfilePresenter me={me} />;
  }
  return (
    <IndicatorContainer>
      <ActivityIndicator size={"small"} color={"black"} />
    </IndicatorContainer>
  );
};

export default ProfileContainer;
