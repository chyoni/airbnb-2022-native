import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { SCREEN_WIDTH } from '../../utils';
import colors from '../../colors';

const Button = styled.View`
  border: 1px solid ${(props) => (props.accent ? 'transparent' : colors.black)};
  border-radius: 10px;
  padding: 15px 0px;
  align-items: center;
  width: ${SCREEN_WIDTH / 2}px;
  background-color: ${(props) => (props.accent ? colors.red : 'transparent')};
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? 'white' : colors.black)};
`;

const Btn = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <Button accent={accent}>
      <Text accent={accent}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};
export default Btn;
