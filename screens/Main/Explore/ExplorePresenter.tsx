import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../colors';
import RoomCard from '../../../components/RoomCard';
import { RoomType } from '../../../redux/roomsSlice';
import { isAndroid } from '../../../utils';

interface ExplorePresenterProps {
  rooms: RoomType[];
  increasePage: () => void;
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
const GoSearchContainer = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;
const GoSearchText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.red};
  margin-right: 5px;
`;
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
  const navigation = useNavigation<any>();
  return (
    <Container>
      <GoSearchContainer>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 5,
            backgroundColor: '#F6FBF4',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Search')}
        >
          <GoSearchText>Go Search</GoSearchText>
          <Ionicons
            name={isAndroid() ? 'md-search' : 'ios-search'}
            size={15}
            color={colors.red}
          />
        </TouchableOpacity>
      </GoSearchContainer>
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
    </Container>
  );
};

export default ExplorePresenter;
