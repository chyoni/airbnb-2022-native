import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import DismissKeyboard from "../../components/Auth/DismissKeyboard";
import Input from "../../components/Auth/Input";
import { AuthStackParamList } from "../../navigation/Auth";
import { isEmail } from "../../utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const SignIn: React.FC<StackScreenProps<AuthStackParamList, "SignIn">> = ({
  route: { params },
}) => {
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isFormValid = () => {
    if (email === "" || password === "") {
      Alert.alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      Alert.alert("Email is invalid");
      return false;
    }
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
  };
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle={"dark-content"} />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={email}
              placeholder={"Email"}
              keyboardType={"email-address"}
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
          <Btn text={"Sign In"} accent onPress={handleSubmit} />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};

export default SignIn;
