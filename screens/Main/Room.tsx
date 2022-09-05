import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../colors';
import RoomPhotos from '../../components/RoomPhotos';
import { MainChildrenParamList } from '../../navigation/Main';
import { isAndroid } from '../../utils';

const Container = styled.View`
  padding: 5px 10px;
  flex: 1;
`;
const Address = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 15px;
`;
const PriceBox = styled.View`
  margin-bottom: 10px;
`;
const Price = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color: ${colors.darkGray};
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
const CheckTimeContainer = styled.View`
  margin: 10px 0;
  margin-bottom: 30px;
`;
const TitleBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const CheckTimeTitle = styled.Text`
  margin-left: 7px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.darkGray};
`;
const CheckTimeData = styled.Text``;
const MapContainer = styled.View`
  width: 100%;
  height: 400px;
`;

function formatQuantities(number: number, name: string) {
  if (number === 1) {
    return `${number} ${name}`;
  } else {
    return `${number} ${name}s`;
  }
}

function formatTime(time: string) {
  return time.split(':')[0];
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
        <PriceBox>
          <Price>${room.price} / Night</Price>
        </PriceBox>
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
        <CheckTimeContainer>
          <TitleBox>
            <Ionicons
              name={isAndroid() ? 'md-timer-outline' : 'ios-timer-outline'}
              size={25}
            />
            <CheckTimeTitle>Check In / Check Out</CheckTimeTitle>
          </TitleBox>
          <CheckTimeData>
            {formatTime(room.check_in)}'s clock. / {formatTime(room.check_out)}
            's clock.
          </CheckTimeData>
        </CheckTimeContainer>
        <MapContainer>
          <MapView
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: parseFloat(room.lat),
              longitude: parseFloat(room.lng),
              latitudeDelta: 0.004,
              longitudeDelta: 0.004,
            }}
            style={{
              width: '100%',
              height: '100%',
              ...StyleSheet.absoluteFillObject,
            }}
          >
            <Marker
              coordinate={{
                latitude: parseFloat(room.lat),
                longitude: parseFloat(room.lng),
              }}
            />
          </MapView>
        </MapContainer>
      </Container>
    </ScrollView>
  );
};

export default Room;
