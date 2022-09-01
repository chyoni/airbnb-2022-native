import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert } from "react-native";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import api from "../../api";
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

const SignUp: React.FC<StackScreenProps<AuthStackParamList, "SignUp">> = ({
  navigation,
}) => {
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

export default SignUp;
