import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../colors';
import RoomCard from '../../../components/RoomCard';
import { RoomType } from '../../../redux/roomsSlice';

interface ExplorePresenterProps {
  rooms: RoomType[];
  increasePage: () => void;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const MoreLoadBtn = styled.TouchableOpacity``;
const Text = styled.Text``;

const ExplorePresenter: React.FC<ExplorePresenterProps> = ({
  rooms,
  increasePage,
}) => {
  return (
    <ScrollView
      style={{ width: '100%' }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {rooms.length === 0 ? (
        <ActivityIndicator color={colors.black} size={8} />
      ) : (
        rooms.map((room) => <RoomCard key={room.id} room={room} />)
      )}
      <MoreLoadBtn onPress={increasePage}>
        <Text>Load more</Text>
      </MoreLoadBtn>
    </ScrollView>
  );
};

export default ExplorePresenter;
