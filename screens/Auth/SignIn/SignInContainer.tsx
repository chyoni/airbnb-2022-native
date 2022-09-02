import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { AuthStackParamList } from "../../../navigation/Auth";
import { userLogin } from "../../../redux/usersSlice";
import { isEmail } from "../../../utils";
import SignInPresenter from "./SignInPresenter";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const SignInContainer: React.FC<
  StackScreenProps<AuthStackParamList, "SignIn">
> = ({ route: { params } }) => {
  const dispatch = useDispatch<any>();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isFormValid = (): boolean => {
    if (email === "" || password === "") {
      Alert.alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      Alert.alert("Email is invalid");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };
  return (
    <SignInPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignInContainer;
