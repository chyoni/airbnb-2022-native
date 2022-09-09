import React, { useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import colors from '../../colors';
import { RoomType } from '../../redux/roomsSlice';
import { RootState } from '../../redux/store';
import { SCREEN_WIDTH } from '../../utils';

interface IMapProps {
  rooms: RoomType[];
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const RoomContainer = styled.View`
  background-color: transparent;
  width: ${SCREEN_WIDTH}px;
  align-items: center;
`;
const RoomBox = styled.View`
  width: ${SCREEN_WIDTH - 80}px;
  background-color: white;
  height: 70px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;
const RoomPhoto = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 10px;
`;
const Column = styled.View`
  width: 65%;
`;
const RoomName = styled.Text`
  font-size: 13px;
  color: ${colors.darkGray};
`;
const RoomPrice = styled.Text`
  margin-top: 5px;
  font-size: 11px;
  font-weight: 600;
`;

const Map: React.FC<IMapProps> = ({ rooms }) => {
  const [index, setIndex] = useState<number>(0);
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    const roomIndex = Math.abs(Math.round(x / SCREEN_WIDTH));
    setIndex(roomIndex);
  };
  return (
    <Container>
      <MapView
        style={StyleSheet.absoluteFill}
        camera={{
          center: {
            latitude: parseFloat(rooms[index].lat),
            longitude: parseFloat(rooms[index].lng),
          },
          altitude: 2000,
          pitch: 0,
          heading: 0,
          zoom: 10,
        }}
      >
        {rooms?.map((room) => (
          <Marker
            key={room.id}
            coordinate={{
              latitude: parseFloat(room.lat),
              longitude: parseFloat(room.lng),
            }}
          />
        ))}
      </MapView>
      <ScrollView
        scrollEventThrottle={10000}
        onScroll={onScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ position: 'absolute', bottom: 30 }}
      >
        {rooms?.map((room) => (
          <RoomContainer key={room.id}>
            <RoomBox>
              {room.photos !== undefined && room.photos?.length > 0 && (
                <RoomPhoto
                  source={{ uri: room.photos[0].file }}
                  resizeMode={'cover'}
                />
              )}
              {room.photos === undefined && (
                <RoomPhoto
                  source={{
                    uri: 'https://images.unsplash.com/photo-1521568277769-1284832c95be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80',
                  }}
                  resizeMode={'cover'}
                />
              )}
              <Column>
                <RoomName>{room.name}</RoomName>
                <RoomPrice>$ {room.price}</RoomPrice>
              </Column>
            </RoomBox>
          </RoomContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

function mapStateToProps(state: RootState) {
  return { rooms: state.roomsReducer.explore.rooms };
}

export default connect(mapStateToProps)(Map);
