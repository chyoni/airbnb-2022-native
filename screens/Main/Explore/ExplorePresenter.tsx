import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import colors from "../../../colors";
import RoomCard from "../../../components/RoomCard";
import { RoomType } from "../../../redux/roomsSlice";

interface ExplorePresenterProps {
  rooms: RoomType[];
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const ExplorePresenter: React.FC<ExplorePresenterProps> = ({ rooms }) => {
  console.log(rooms);
  return (
    <ScrollView
      style={{ width: "100%" }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {rooms.length === 0 ? (
        <ActivityIndicator color={colors.black} size={8} />
      ) : (
        rooms.map((room) => <RoomCard key={room.id} room={room} />)
      )}
    </ScrollView>
  );
};

export default ExplorePresenter;
