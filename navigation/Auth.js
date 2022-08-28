import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import { Ionicons } from '@expo/vector-icons';

const Auth = createStackNavigator();
const isAndroid = Platform.OS === 'android';

export default () => (
  <Auth.Navigator
    screenOptions={{
      headerMode: 'float',
      headerBackTitle: false,
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => (
        <View style={{ paddingLeft: 10 }}>
          <Ionicons
            name={isAndroid ? 'md-arrow-back' : 'ios-arrow-back'}
            size={24}
          />
        </View>
      ),
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);
