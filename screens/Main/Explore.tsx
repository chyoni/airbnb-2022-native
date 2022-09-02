import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { logOut } from "../../redux/usersSlice";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Explore = () => {
  return (
    <Container>
      <Text>Explore</Text>
    </Container>
  );
};

export default Explore;
