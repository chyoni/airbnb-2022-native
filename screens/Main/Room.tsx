import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import RoomPhotos from '../../components/RoomPhotos';
import { MainChildrenParamList } from '../../navigation/Main';

const Text = styled.Text``;

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
    </ScrollView>
  );
};

export default Room;
