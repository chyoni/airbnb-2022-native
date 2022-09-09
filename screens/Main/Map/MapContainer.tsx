import React, { useEffect, useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import MapView from 'react-native-maps';
import { RoomType } from '../../../redux/roomsSlice';
import { SCREEN_WIDTH } from '../../../utils';
import MapPresenter from './MapPresenter';

interface IMapContainerProps {
  rooms: RoomType[];
}

const MapContainer: React.FC<IMapContainerProps> = ({ rooms }) => {
  const mapRef = useRef<MapView | null>(null);
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
  useEffect(() => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(rooms[index].lat),
          longitude: parseFloat(rooms[index].lng),
        },
        altitude: 2000,
        pitch: 0,
        heading: 0,
        zoom: 10,
      },
      { duration: 1000 }
    );
  }, [index]);
  return (
    <MapPresenter
      mapRef={mapRef}
      index={index}
      onScroll={onScroll}
      rooms={rooms}
    />
  );
};

export default MapContainer;
