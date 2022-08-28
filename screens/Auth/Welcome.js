import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils';
import { BlurView } from 'expo-blur';
import Btn from '../../components/Auth/Btn';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  z-index: -1;
  background-size: contain;
  background-position: center;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 107px;
  margin-top: 50px;
`;

const BtnContainer = styled.View`
  margin-top: 20px;
`;

const Divider = styled.View`
  padding: 20px 0;
`;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate('SignUp');
  const goToSignIn = () => navigation.navigate('SignIn');
  return (
    <Container>
      <BlurView
        intensity={30}
        tint="light"
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo
          source={{
            uri: 'https://pluspng.com/img-png/airbnb-vector-png-airbnb-logo-airbnb-logo-877.png',
          }}
        />
        <BtnContainer>
          <Btn onPress={goToSignUp} text={'Sign Up'} accent={true} />
          <Divider />
          <Btn onPress={goToSignIn} text={'Sign In'} />
        </BtnContainer>
      </BlurView>
      <Image
        source={{
          uri: 'https://2.bp.blogspot.com/-CK6EN7xY2JY/T4k9fmdGJ7I/AAAAAAAAGDs/7YHvdNa-fbs/s1600/cute-puppy-wallpapers+(1).jpg',
        }}
      />
      <StatusBar barStyle={'light-content'} />
    </Container>
  );
};
