import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenStackProps } from "react-native-screens";
import styled from "styled-components/native";
import colors from "../../../colors";
import { MainChildrenParamList } from "../../../navigation/Main";
import { UserType } from "../../../redux/usersSlice";
import { isAndroid } from "../../../utils";
import { ProfileScreenNavigationProps } from "./ProfileContainer";

interface IProfilePresenterProps {
  me: UserType;
}

const Container = styled.View`
  padding: 10px 20px;
`;
const HeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
`;
const Avatar = styled.ImageBackground`
  height: 100px;
  width: 100px;
`;
const EditLink = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-decoration-line: underline;
`;
const IntroduceContainer = styled.View`
  margin-top: 10px;
  width: 100%;
`;
const IntroTitle = styled.Text`
  font-weight: 600;
  font-size: 22px;
  color: ${colors.darkGray};
`;
const IntroCreated = styled.Text`
  margin-top: 5px;
  font-weight: 500;
  font-size: 13px;
`;
const Divider = styled.View`
  margin: 40px 0;
  width: 100%;
  border: 0.5px solid ${colors.lightGray};
  height: 1px;
`;
const AuthenticatedContainer = styled.View`
  width: 100%;
`;
const AuthenticatedText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
`;
const AuthItemContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;
const AuthItems = styled.Text`
  margin-left: 10px;
`;

const ProfilePresenter: React.FC<IProfilePresenterProps> = ({ me }) => {
  const navigation = useNavigation<ProfileScreenNavigationProps>();
  useEffect(() => {
    navigation.setOptions({ title: me.first_name });
  }, []);
  return (
    <Container>
      <HeaderContainer>
        <Avatar
          imageStyle={{ borderRadius: "100%" }}
          resizeMode={"cover"}
          source={{
            uri: me.avatar
              ? `${me.avatar}`
              : "https://www.slotcharter.net/wp-content/uploads/2020/02/no-avatar.png",
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <EditLink>Edit</EditLink>
        </TouchableOpacity>
      </HeaderContainer>
      <IntroduceContainer>
        <IntroTitle>{`Hello I'm ${me.first_name}`}</IntroTitle>
        <IntroCreated>{`Joined by ${
          me.date_joined.split("T", -1)[0]
        }`}</IntroCreated>
      </IntroduceContainer>
      <Divider />
      <AuthenticatedContainer>
        <AuthItemContainer>
          <Ionicons
            size={32}
            color={colors.green}
            name={
              isAndroid()
                ? "ios-shield-checkmark-sharp"
                : "md-shield-checkmark-sharp"
            }
          />
          <AuthenticatedText>Authenticated Completely</AuthenticatedText>
        </AuthItemContainer>
        <AuthItemContainer>
          <Ionicons
            name={isAndroid() ? "ios-checkmark-sharp" : "md-checkmark-sharp"}
            size={32}
            color={colors.black}
          />
          <AuthItems>Email</AuthItems>
        </AuthItemContainer>
        <AuthItemContainer>
          <Ionicons
            name={isAndroid() ? "ios-checkmark-sharp" : "md-checkmark-sharp"}
            size={32}
            color={colors.black}
          />
          <AuthItems>Phone Number</AuthItems>
        </AuthItemContainer>
      </AuthenticatedContainer>
    </Container>
  );
};

export default ProfilePresenter;
