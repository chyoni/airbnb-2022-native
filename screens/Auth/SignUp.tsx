import React, { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import DismissKeyboard from "../../components/Auth/DismissKeyboard";
import Input from "../../components/Auth/Input";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => console.log(`${username}${password}`);
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
              autoCapitalize={"none"}
              stateFn={setFirstName}
            />
            <Input
              value={lastName}
              placeholder={"LastName"}
              autoCapitalize={"none"}
              stateFn={setLastName}
            />
            <Input
              value={username}
              placeholder={"Username"}
              autoCapitalize={"none"}
              stateFn={setUsername}
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
