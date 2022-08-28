import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      <Button onPress={() => navigation.navigate('SignUp')} title="Sign up" />
      <Button onPress={() => navigation.navigate('SignIn')} title="Sign in" />
    </View>
  );
};
