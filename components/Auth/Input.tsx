import React from "react";
import styled from "styled-components/native";
import { SCREEN_WIDTH } from "../../utils";
import colors from "../../colors";

export interface IInput {
  value?: string;
  placeholder?: string;
  isPassword?: boolean;
  autoCapitalize?: string;
  stateFn: (text: string) => void;
}

const Container = styled.TextInput`
  width: ${SCREEN_WIDTH / 1.5}px;
  padding: 12px 10px;
  border: 1px solid ${colors.black};
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
`;

const Input: React.FC<IInput> = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
}) => {
  return (
    <Container
      value={value}
      placeholder={placeholder}
      secureTextEntry={isPassword}
      autoCapitalize={autoCapitalize}
      onChangeText={(text: string) => stateFn(text)}
    />
  );
};

export default Input;
