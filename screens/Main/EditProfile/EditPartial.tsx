import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Alert, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import colors from "../../../colors";
import { MainChildrenParamList } from "../../../navigation/Main";
import { RootState } from "../../../redux/store";
import { editPartial } from "../../../redux/usersSlice";
import { isAndroid, SCREEN_HEIGHT } from "../../../utils";

const Container = styled.View`
  width: 100%;
  padding: 20px 10px;
`;
const HeaderContainer = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT / 10}px;
`;
const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
`;
const HeaderDesc = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
`;
const BodyContainer = styled.View`
  width: 100%;
`;
const BottomContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const SaveText = styled.Text`
  font-size: 15px;
  text-decoration: underline;
  font-weight: 400;
`;

const EditPartial: React.FC<
  StackScreenProps<MainChildrenParamList, "EditPartial">
> = ({ navigation, route }) => {
  const [partial, setPartial] = useState<string>();
  const dispatch = useDispatch<any>();
  const { me } = useSelector((state: RootState) => state.usersReducer);
  const partialLabel = route.params.label;
  const submit = () => {
    if (partial === "" || !partial) {
      Alert.alert(`${route.params.label}'s value is empty`);
      return;
    }
    let form = null;
    switch (partialLabel) {
      case "bio":
        form = { bio: partial };
        break;
      case "location":
        form = { address: partial };
        break;
      case "job":
        form = { job: partial };
        break;
      default:
        form = { bio: "" };
        break;
    }
    dispatch(editPartial(form));
    navigation.goBack();
  };
  const checkCurrentValue = () => {
    let currentValue = "";
    switch (partialLabel) {
      case "bio":
        me?.bio ? (currentValue = me.bio) : "";
        break;
      case "location":
        me?.address ? (currentValue = me.address) : "";
        break;
      case "job":
        me?.job ? (currentValue = me.job) : "";
    }
    return currentValue;
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Edit ${route.params.label}`,
      headerBackImage: () => (
        <Ionicons
          name={isAndroid() ? "md-close" : "ios-close"}
          size={25}
          style={{ paddingHorizontal: 15 }}
        />
      ),
    });
  }, []);
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>{route.params.label}</HeaderTitle>
        {route.params.label === "bio" && (
          <HeaderDesc>Introduce yourself for other hosts or guests.</HeaderDesc>
        )}
        {route.params.label === "location" && (
          <HeaderDesc>Set your location</HeaderDesc>
        )}
        {route.params.label === "job" && <HeaderDesc>Set your job</HeaderDesc>}
      </HeaderContainer>
      <BodyContainer>
        <TextInput
          placeholder={checkCurrentValue()}
          value={partial}
          onChangeText={(text) => setPartial(text)}
          multiline
          numberOfLines={10}
          autoFocus
          style={{
            borderWidth: 0.3,
            borderColor: colors.darkGray,
            padding: 10,
            height: 200,
          }}
        />
      </BodyContainer>
      <BottomContainer>
        <TouchableOpacity onPress={submit}>
          <SaveText>OK</SaveText>
        </TouchableOpacity>
      </BottomContainer>
    </Container>
  );
};

export default EditPartial;
