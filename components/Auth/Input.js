import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { SCREEN_WIDTH } from '../../utils';
import colors from '../../colors';

const Container = styled.TextInput`
  width: ${SCREEN_WIDTH / 1.5}px;
  padding: 12px 10px;
  border: 1px solid ${colors.black};
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
`;

const Input = ({
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
      onChangeText={(text) => stateFn(text)}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  stateFn: PropTypes.func.isRequired,
};

export default Input;
