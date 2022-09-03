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

const MoreBtnContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const MoreLoadBtn = styled.TouchableOpacity`
  background-color: ${colors.green};
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 8px;
`;
const Text = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 12px;
`;

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
      <MoreBtnContainer>
        <MoreLoadBtn onPress={increasePage}>
          <Text>Load more</Text>
        </MoreLoadBtn>
      </MoreBtnContainer>
    </ScrollView>
  );
};

export default ExplorePresenter;
