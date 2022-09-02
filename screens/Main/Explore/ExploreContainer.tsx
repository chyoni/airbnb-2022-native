import React, { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

interface IExploreContainerProps {
  getRooms: () => void;
  rooms: [];
  page: number;
}

const ExploreContainer: React.FC<IExploreContainerProps> = ({
  getRooms,
  rooms,
  page,
}) => {
  useEffect(() => {
    getRooms();
  }, []);
  console.log(rooms, page);
  return <ExplorePresenter />;
};

export default ExploreContainer;
