import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import colors from '../colors';
import { RoomType } from '../redux/roomsSlice';
import { toggleFav } from '../redux/usersSlice';
import { isAndroid } from '../utils';
import RoomPhotos from './RoomPhotos';

interface IRoomCardProps {
  room: RoomType;
}

const RoomContainer = styled.View`
  flex: 1;
  position: relative;
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
const TOpacity = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
`;
const FavsButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const RoomCard: React.FC<IRoomCardProps> = ({ room }) => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  return (
    <RoomContainer>
      <TOpacity onPress={() => dispatch(toggleFav(room.id))}>
        <FavsButton>
          <Ionicons
            name={isAndroid() ? 'md-heart' : 'ios-heart'}
            size={19}
            color={room.is_fav ? colors.red : colors.gray}
          />
        </FavsButton>
      </TOpacity>
      <RoomPhotos isModalScreen={false} room={room} photos={room.photos} />
      <TouchableOpacity onPress={() => navigation.navigate('Room', { room })}>
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
      </TouchableOpacity>
    </RoomContainer>
  );
};

export default RoomCard;
