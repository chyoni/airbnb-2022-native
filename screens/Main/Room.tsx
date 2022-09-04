import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';
import { MainChildrenParamList } from '../../navigation/Main';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Room: React.FC<StackScreenProps<MainChildrenParamList, 'Room'>> = ({
  route,
}) => {
  console.log(route.params);
  return (
    <Container>
      <Text>Room</Text>
    </Container>
  );
};

export default Room;
