import { Action, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import api from "../api";
import { UserType } from "./usersSlice";

export interface RoomsState {
  explore: {
    page: number;
    rooms: RoomType[];
  };
  favs: [];
}

export interface RoomType {
  id: number;
  name: string;
  is_fav: boolean;
  created: string;
  address: string;
  price: number;
  beds: number;
  lat: string;
  lng: string;
  bedrooms: number;
  bathrooms: number;
  check_in: string;
  check_out: string;
  instant_book: boolean;
  user: UserType;
}

export interface ISetExploreRoomsPayload {
  rooms: RoomType[];
  page: number;
}

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  } as RoomsState,
  reducers: {
    setExploreRooms(state, action: PayloadAction<ISetExploreRoomsPayload>) {
      action.payload.rooms.forEach((payloadRoom) => {
        const exist = state.explore.rooms.find(
          (room) => room.id === payloadRoom.id
        );
        if (!exist) {
          state.explore.rooms.push(payloadRoom);
        }
      });
      state.explore.page = action.payload.page;
    },
  },
});

const { setExploreRooms } = roomsSlice.actions;

export const getRooms = () => async (dispatch: Dispatch<Action>) => {
  try {
    const res = await api.rooms();
    if (res?.status === 200 && res.data.results) {
      const rooms = res.data.results;
      dispatch(
        setExploreRooms({
          rooms,
          page: 1,
        })
      );
    }
  } catch (e) {}
};

export default roomsSlice.reducer;
