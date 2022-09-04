import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../colors';
import RoomPhotos from '../../components/RoomPhotos';
import { MainChildrenParamList } from '../../navigation/Main';

const Container = styled.View`
  padding: 5px 10px;
  flex: 1;
`;
const Address = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 10px;
`;
const InfoContainer = styled.View`
  flex-direction: row;
`;
const InfoBox = styled.View`
  background-color: ${colors.green};
  padding: 5px 8px;
  border-radius: 4px;
  margin-right: 8px;
`;
const InfoText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: white;
`;

function formatQuantities(number: number, name: string) {
  if (number === 1) {
    return `${number} ${name}`;
  } else {
    return `${number} ${name}s`;
  }
}

const Room: React.FC<StackScreenProps<MainChildrenParamList, 'Room'>> = ({
  route,
  navigation,
}) => {
  const room = route.params.room;
  useEffect(() => {
    navigation.setOptions({ title: room.name });
  }, []);
  return (
    <ScrollView>
      <RoomPhotos isModalScreen={true} photos={room.photos} factor={2} />
      <Container>
        <Address>{room.address}</Address>
        <InfoContainer>
          <InfoBox>
            <InfoText>{formatQuantities(room.beds, 'bed')}</InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>{formatQuantities(room.bedrooms, 'bedroom')}</InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>{formatQuantities(room.bathrooms, 'bathroom')}</InfoText>
          </InfoBox>
        </InfoContainer>
      </Container>
    </ScrollView>
  );
};

export default Room;
