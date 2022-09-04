import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../colors';
import RoomCard from '../../../components/RoomCard';
import { RoomType } from '../../../redux/roomsSlice';

interface SavedPresenterProps {
  rooms: RoomType[];
}
const Contaier = styled.View`
  margin-top: 60px;
`;
const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: ${colors.darkGray};
  padding: 8px 8px;
`;
const NotContents = styled.View`
  flex: 1;
  margin-top: 40px;
  justify-content: center;
`;
const Text = styled.Text`
  font-weight: 600;
  font-size: 15px;
`;

const SavedPresenter: React.FC<SavedPresenterProps> = ({ rooms }) => {
  return (
    <Contaier>
      <Title>My favourites ({rooms.length})</Title>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {rooms.length > 0 ? (
          rooms.map((room) => <RoomCard key={room.id} room={room} />)
        ) : (
          <NotContents>
            <Text>Doesn't exists 🥲🥲🥲</Text>
          </NotContents>
        )}
      </ScrollView>
    </Contaier>
  );
};

export default SavedPresenter;
