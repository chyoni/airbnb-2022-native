import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import {
  MainChildrenParamList,
  TabsChildrenParamList,
} from "../../../navigation/Main";
import { UserType } from "../../../redux/usersSlice";
import ProfilePresenter from "./ProfilePresenter";

interface IProfileContainerProps {
  getMe: () => void;
  me: UserType | null;
}

export type ProfileScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabsChildrenParamList, "Profile">,
  StackNavigationProp<MainChildrenParamList>
>;

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
