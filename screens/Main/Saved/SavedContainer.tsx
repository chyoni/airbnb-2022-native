import React, { useEffect } from 'react';
import { RoomType } from '../../../redux/roomsSlice';
import SavedPresenter from './SavedPresenter';

interface ISavedContainerProps {
  getFavs: () => void;
  favs: RoomType[];
}

const SavedContainer: React.FC<ISavedContainerProps> = ({ getFavs, favs }) => {
  useEffect(() => {
    getFavs();
  }, []);

  return <SavedPresenter rooms={favs} />;
};

export default SavedContainer;
