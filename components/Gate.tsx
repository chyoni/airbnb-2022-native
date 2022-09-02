import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";
import { RootState } from "../redux/store";
import { logIn, logOut, UserState } from "../redux/usersSlice";

export default () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
