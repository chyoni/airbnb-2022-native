import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import {
  MainChildrenParamList,
  TabsChildrenParamList,
} from "../../../navigation/Main";
import { UserType } from "../../../redux/usersSlice";
import EditProfilePresenter from "./EditProfilePresenter";

interface IEditProfileContainerProps {
  getMe: () => void;
  me: UserType | null;
}

export type EditProfileScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabsChildrenParamList>,
  StackNavigationProp<MainChildrenParamList, "EditProfile">
>;

const EditProfileContainer: React.FC<IEditProfileContainerProps> = ({ me }) => {
  if (me) {
    return <EditProfilePresenter me={me} />;
  }
  return null;
};

export default EditProfileContainer;
