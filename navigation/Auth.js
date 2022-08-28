import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import BackBtn from '../components/Auth/BackBtn';

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    screenOptions={{
      headerMode: 'float',
      headerBackTitle: false,
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerTintColor: 'white' }}
    />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);
