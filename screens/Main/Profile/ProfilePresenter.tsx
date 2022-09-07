import React from "react";
import styled from "styled-components/native";
import { UserType } from "../../../redux/usersSlice";

interface IProfilePresenterProps {
  me: UserType;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const ProfilePresenter: React.FC<IProfilePresenterProps> = ({ me }) => {
  console.log(me);
  return (
    <Container>
      <Text>ProfilePresenter</Text>
    </Container>
  );
};

export default ProfilePresenter;
