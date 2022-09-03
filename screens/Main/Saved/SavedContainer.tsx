import React, { useEffect } from 'react';
import SavedPresenter from './SavedPresenter';

interface ISavedContainerProps {
  getFavs: () => void;
}

const SavedContainer: React.FC<ISavedContainerProps> = ({ getFavs }) => {
  useEffect(() => {
    getFavs();
  }, []);
  return <SavedPresenter />;
};

export default SavedContainer;
