import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import Btn from '../../components/Auth/Btn';
import DismissKeyboard from '../../components/Auth/DismissKeyboard';
import Input from '../../components/Auth/Input';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => alert(`${username}${password}`);
  const dismissKeyboard = () => Keyboard.dismiss();
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle={'dark-content'} />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={username}
              placeholder={'Username'}
              autoCapitalize={'none'}
              stateFn={setUsername}
            />
            <Input
              value={password}
              placeholder={'Password'}
              isPassword
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={'Sign In'} accent onPress={handleSubmit} />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
