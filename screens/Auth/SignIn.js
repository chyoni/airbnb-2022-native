import React from 'react';
import styled from 'styled-components/native';
import Btn from '../../components/Auth/Btn';

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const TextInput = styled.TextInput``;

export default () => {
  const handleSubmit = () => alert('Sending data...');
  return (
    <Container>
      <TextInput placeholder={'Email'}></TextInput>
      <TextInput placeholder={'Password'} secureTextEntry></TextInput>
      <Btn text={'Sign In'} accent onPress={handleSubmit} />
    </Container>
  );
};
