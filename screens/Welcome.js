import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils';
import { BlurView } from 'expo-blur';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  top: 0;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <BlurView
        intensity={100}
        tint="light"
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: 'https://jooinn.com/images/curious-cat-6.jpg' }}
        />
      </BlurView>
      <StatusBar barStyle={'light-content'} />
    </Container>
  );
};
