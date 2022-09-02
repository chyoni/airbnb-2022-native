import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert } from "react-native";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import api from "../../../api";
import Btn from "../../../components/Auth/Btn";
import DismissKeyboard from "../../../components/Auth/DismissKeyboard";
import Input from "../../../components/Auth/Input";
import { AuthStackParamList } from "../../../navigation/Auth";
import { isEmail } from "../../../utils";

interface ISignUpPresenterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  loading: boolean;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const SignUpPresenter: React.FC<ISignUpPresenterProps> = ({
  firstName,
  lastName,
  email,
  password,
  loading,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  handleSubmit,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle={"dark-content"} />
        {/* KeyboardAvoidingView는 나타나는 keyboard로부터 component를 지키고 싶은 아이들을 감싸주면 됨 */}
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={firstName}
              placeholder={"FirstName"}
              autoCapitalize={"words"}
              stateFn={setFirstName}
            />
            <Input
              value={lastName}
              placeholder={"LastName"}
              autoCapitalize={"words"}
              stateFn={setLastName}
            />
            <Input
              keyboardType="email-address"
              value={email}
              placeholder={"Email"}
              autoCapitalize={"none"}
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder={"Password"}
              isPassword
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn
            loading={loading}
            text={"Sign In"}
            accent
            onPress={handleSubmit}
          />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};

export default SignUpPresenter;
