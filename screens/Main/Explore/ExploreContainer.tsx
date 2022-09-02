import React, { useEffect } from "react";
import { RoomType } from "../../../redux/roomsSlice";
import ExplorePresenter from "./ExplorePresenter";

interface IExploreContainerProps {
  getRooms: () => void;
  rooms: RoomType[];
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
  return <ExplorePresenter rooms={rooms} />;
};

export default ExploreContainer;
