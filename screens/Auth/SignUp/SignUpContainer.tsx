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
import SignUpPresenter from "./SignUpPresenter";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const SignUpContainer: React.FC<
  StackScreenProps<AuthStackParamList, "SignUp">
> = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const validateForm = (): boolean => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      Alert.alert("All field is required.");
      return false;
    }

    if (!isEmail(email)) {
      Alert.alert("Please add a valid email.");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const data = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (data?.status === 201) {
        Alert.alert("Success", "Sign up completely!");
        navigation.navigate("SignIn", { email, password });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SignUpPresenter
      firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      loading={loading}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
