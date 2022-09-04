import React, { useEffect } from 'react';
import { RoomType } from '../../../redux/roomsSlice';
import ExplorePresenter from './ExplorePresenter';

interface IExploreContainerProps {
  getRooms: (page: number) => void;
  increasePage: () => void;
  rooms: RoomType[];
  page: number;
}

const ExploreContainer: React.FC<IExploreContainerProps> = ({
  getRooms,
  increasePage,
  rooms,
  page,
}) => {
  useEffect(() => {
    getRooms(1);
  }, []);
  useEffect(() => {
    getRooms(page);
  }, [page]);
  return <ExplorePresenter rooms={rooms} increasePage={increasePage} />;
};

export default ExploreContainer;
