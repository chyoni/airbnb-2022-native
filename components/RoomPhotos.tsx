import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import { PhotoType, RoomType } from '../redux/roomsSlice';
import { SCREEN_HEIGHT } from '../utils';

export interface IRoomPhotosProps {
  photos?: PhotoType[] | undefined;
  isModalScreen: boolean;
  room?: RoomType;
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

const RoomPhotos: React.FC<IRoomPhotosProps> = ({
  photos,
  isModalScreen,
  room,
}) => {
  const navigation = useNavigation<any>();
  return (
    <PhotoContainer>
      {photos?.length === 0 ? (
        <TouchableOpacity
          onPress={
            isModalScreen
              ? undefined
              : () => navigation.navigate('Room', { room })
          }
        >
          <Photo
            imageStyle={{ borderRadius: 10 }}
            resizeMode={'cover'}
            source={{
              uri: 'https://images.unsplash.com/photo-1521568277769-1284832c95be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80',
            }}
          />
        </TouchableOpacity>
      ) : (
        <Swiper
          loop={false}
          activeDotColor={'white'}
          dotColor={'rgba(200, 200, 200, 0.8)'}
          dotStyle={{ width: 5, height: 5 }}
        >
          {photos?.map((photo) => (
            <TouchableOpacity
              key={photo.id}
              onPress={
                isModalScreen
                  ? undefined
                  : () => navigation.navigate('Room', { room })
              }
            >
              <Photo
                imageStyle={{ borderRadius: 10 }}
                resizeMode={'cover'}
                source={{ uri: `${photo.file}` }}
              />
            </TouchableOpacity>
          ))}
        </Swiper>
      )}
    </PhotoContainer>
  );
};

export default RoomPhotos;
