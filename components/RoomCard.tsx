import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import colors from '../colors';
import { RoomType } from '../redux/roomsSlice';
import { SCREEN_HEIGHT } from '../utils';

interface IRoomCardProps {
  room: RoomType;
}

const PhotoContainer = styled.View`
  height: ${SCREEN_HEIGHT / 3}px;
  width: 100%;
  margin-bottom: 7px;
`;
const Photo = styled.ImageBackground`
  height: ${SCREEN_HEIGHT / 3}px;
  width: 100%;
  border-radius: 100px;
`;
const RoomContainer = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;
const UpperContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const RoomName = styled.Text`
  font-weight: 600;
  font-size: 13px;
  color: ${colors.darkGray};
`;
const RateContainer = styled.View`
  flex-direction: row;
`;
const Rated = styled.Text`
  font-size: 9px;
  color: ${colors.gray};
  margin-left: 4px;
`;
const MiddleContainer = styled.View``;
const Address = styled.Text`
  font-size: 10px;
  font-weight: 300;
`;
const PriceContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;
const Price = styled.Text`
  font-size: 11px;
  font-weight: 600;
`;
const PriceText = styled.Text`
  font-size: 10px;
  font-weight: 300;
  margin-left: 5px;
`;

const RoomCard: React.FC<IRoomCardProps> = ({ room }) => {
  return (
    <RoomContainer>
      <PhotoContainer>
        {room.photos?.length === 0 ? (
          <Photo
            imageStyle={{ borderRadius: 10 }}
            resizeMode={'cover'}
            source={{
              uri: 'https://images.unsplash.com/photo-1521568277769-1284832c95be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80',
            }}
          />
        ) : (
          <Swiper
            loop={false}
            activeDotColor={'white'}
            dotColor={'rgba(200, 200, 200, 0.8)'}
            dotStyle={{ width: 5, height: 5 }}
          >
            {room.photos?.map((photo) => (
              <Photo
                imageStyle={{ borderRadius: 10 }}
                key={photo.id}
                resizeMode={'cover'}
                source={{ uri: `${photo.file}` }}
              />
            ))}
          </Swiper>
        )}
      </PhotoContainer>
      <UpperContainer>
        <RoomName>{room.name}</RoomName>
        <RateContainer>
          <Ionicons name={'star-sharp'} color={colors.gray} />
          <Rated>5.0</Rated>
        </RateContainer>
      </UpperContainer>
      <MiddleContainer>
        <Address>{room.address}</Address>
      </MiddleContainer>
      <PriceContainer>
        <Price>$ {room.price}</Price>
        <PriceText>/ Night</PriceText>
      </PriceContainer>
    </RoomContainer>
  );
};

export default RoomCard;
