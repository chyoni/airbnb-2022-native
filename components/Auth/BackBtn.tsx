import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { isAndroid } from "../../utils";

const Container = styled.View`
  padding-left: 10px;
`;

export default () => (
  <Container>
    <Ionicons
      name={isAndroid() ? "md-arrow-back" : "ios-arrow-back"}
      size={24}
    />
  </Container>
);
