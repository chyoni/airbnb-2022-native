import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import styled from "styled-components/native";
import { MainChildrenParamList } from "../../../navigation/Main";

const Container = styled.View``;
const Text = styled.Text``;

const EditPartial: React.FC<
  StackScreenProps<MainChildrenParamList, "EditPartial">
> = ({ navigation, route }) => {
  return (
    <Container>
      <Text>Partial Screen</Text>
    </Container>
  );
};

export default EditPartial;
