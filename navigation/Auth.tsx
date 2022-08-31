import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Auth/Welcome";
import SignUp from "../screens/Auth/SignUp";
import SignIn from "../screens/Auth/SignIn";
import BackBtn from "../components/Auth/BackBtn";

export type AuthStackParamList = {
  Welcome: any;
  SignUp: any;
  SignIn: any;
};

const Auth = createStackNavigator<AuthStackParamList>();

export default () => (
  <Auth.Navigator
    screenOptions={{
      headerMode: "float",
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerTintColor: "white" }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "Sign Up" }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
  </Auth.Navigator>
);
