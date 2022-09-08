import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../../colors";
import { UserType } from "../../../redux/usersSlice";
import { isAndroid, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../utils";
import { EditProfileScreenNavigationProps } from "./EditProfileContainer";

interface IEditProfilePresenterProps {
  me: UserType;
}

const Container = styled.View`
  width: 100%;
  padding: 0 20px;
`;
const HeaderContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
const AvatarContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;
const Avatar = styled.ImageBackground`
  height: 200px;
  width: 200px;
`;
const SelectAvatarContainer = styled.View`
  align-self: flex-end;
`;
const Column = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.darkGray};
`;
const ValueColumn = styled.View`
  width: 100%;
  margin-top: 3px;
`;
const Value = styled.Text`
  font-size: 13px;
  font-weight: 300;
  color: ${colors.darkGray};
`;
const EditLink = styled.Text`
  font-size: 14px;
  font-weight: 500;
  text-decoration-line: underline;
  color: ${colors.darkGray};
`;
const Divider = styled.View`
  margin: 25px 0;
  height: 1px;
  border: 1px solid ${colors.lightGray};
`;

const EditProfilePresenter: React.FC<IEditProfilePresenterProps> = ({ me }) => {
  const navigation = useNavigation<EditProfileScreenNavigationProps>();
  return (
    <Container>
      <HeaderContainer>
        <AvatarContainer>
          <Avatar
            imageStyle={{ borderRadius: "100%" }}
            resizeMode={"cover"}
            source={{
              uri: me.avatar
                ? `${me.avatar}`
                : "https://www.slotcharter.net/wp-content/uploads/2020/02/no-avatar.png",
            }}
          />
        </AvatarContainer>
        <SelectAvatarContainer>
          <TouchableOpacity>
            <Ionicons
              name={isAndroid() ? "md-camera" : "ios-camera"}
              size={25}
            />
          </TouchableOpacity>
        </SelectAvatarContainer>
      </HeaderContainer>
      <Column>
        <Label>Bio</Label>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditPartial", { label: "bio" })}
        >
          <EditLink>Edit</EditLink>
        </TouchableOpacity>
      </Column>
      <ValueColumn>
        <Value>{me.bio ? me.bio : ""}</Value>
      </ValueColumn>
      <Divider />
      <Column>
        <Label>Location</Label>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditPartial", { label: "location" })
          }
        >
          <EditLink>Edit</EditLink>
        </TouchableOpacity>
      </Column>
      <ValueColumn>
        <Value>{me.address ? me.address : ""}</Value>
      </ValueColumn>
      <Divider />
      <Column>
        <Label>Job</Label>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditPartial", { label: "job" })}
        >
          <EditLink>Edit</EditLink>
        </TouchableOpacity>
      </Column>
      <ValueColumn>
        <Value>{me.job ? me.job : ""}</Value>
      </ValueColumn>
      <Divider />
    </Container>
  );
};

export default EditProfilePresenter;
