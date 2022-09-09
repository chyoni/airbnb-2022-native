import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
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
  width: ${SCREEN_WIDTH - 150}px;
  background-color: white;
  height: 30px;
`;
const RoomName = styled.Text``;

const Map: React.FC<IMapProps> = ({ rooms }) => {
  return (
    <Container>
      <MapView style={StyleSheet.absoluteFill} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ position: 'absolute', bottom: 30 }}
      >
        {rooms?.map((room) => (
          <RoomContainer key={room.id}>
            <RoomBox>
              <RoomName>{room.name}</RoomName>
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
