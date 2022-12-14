import React from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Btn from '../../../components/Auth/Btn';
import DismissKeyboard from '../../../components/Auth/DismissKeyboard';
import Input from '../../../components/Auth/Input';

interface SignInProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<any>;
  setPassword: React.Dispatch<any>;
  handleSubmit: () => void;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const SignInPresenter: React.FC<SignInProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle={'dark-content'} />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={email}
              placeholder={'Email'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              stateFn={setEmail}
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

export default SignInPresenter;
