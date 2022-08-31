import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { SCREEN_WIDTH } from "../../utils";
import colors from "../../colors";

export interface IBtn {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  accent?: boolean;
  loading?: boolean;
}

const Button = styled.View<IBtn>`
  border: 1px solid ${(props) => (props.accent ? "transparent" : colors.black)};
  border-radius: 30px;
  padding: 15px 0px;
  align-items: center;
  width: ${SCREEN_WIDTH / 1.5}px;
  background-color: ${(props) => (props.accent ? colors.red : "transparent")};
`;

const Text = styled.Text<IBtn>`
  color: ${(props) => (props.accent ? "white" : colors.black)};
  font-weight: 600;
  font-size: 14px;
`;

const Btn: React.FC<IBtn> = ({
  onPress,
  text,
  accent = false,
  loading = false,
}) => (
  <TouchableOpacity onPress={onPress} disabled={loading}>
    <Button accent={accent}>
      {loading ? (
        <ActivityIndicator color={accent ? "white" : "black"} />
      ) : (
        <Text accent={accent}>{text}</Text>
      )}
    </Button>
  </TouchableOpacity>
);

export default Btn;
