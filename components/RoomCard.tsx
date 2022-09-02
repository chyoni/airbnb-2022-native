import React from "react";
import styled from "styled-components/native";
import { RoomType } from "../redux/roomsSlice";

interface IRoomCardProps {
  room: RoomType;
}

const Container = styled.View``;

const Text = styled.Text``;

const RoomCard: React.FC<IRoomCardProps> = ({ room }) => {
  return (
    <Container>
      <Text>{room.name}</Text>
    </Container>
  );
};

export default RoomCard;
