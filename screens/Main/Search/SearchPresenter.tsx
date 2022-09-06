import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../../colors";
import { SCREEN_HEIGHT } from "../../../utils";

export interface ISearchPresenterProps {
  goBack: () => void;
}

const Container = styled.View`
  flex: 1;
`;
const SearchBox = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT / 8}px;
  flex-direction: row;
  padding: 10px 10px;
  align-items: center;
`;
const SearchTextInput = styled.TextInput`
  width: 80%;
  border: 1px solid ${colors.gray};
  height: 30px;
  padding: 10px 10px;
  border-radius: 10px;
  margin-right: 10px;
`;
const GoBackText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.darkGray};
`;
const Text = styled.Text``;

const SearchPresenter: React.FC<ISearchPresenterProps> = ({ goBack }) => {
  return (
    <Container>
      <SearchBox>
        <SearchTextInput />
        <TouchableOpacity onPress={goBack}>
          <GoBackText>Cancel</GoBackText>
        </TouchableOpacity>
      </SearchBox>
    </Container>
  );
};

export default SearchPresenter;
