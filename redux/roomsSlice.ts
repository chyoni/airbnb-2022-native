import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RoomsState {
  explore: {
    page: number;
    rooms: RoomType[];
  };
  favs: [];
}

export interface RoomType {
  id?: number;
  name?: string;
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
      state.explore.rooms.push(action.payload.rooms as RoomType);
      state.explore.page = action.payload.page;
    },
  },
});

const { setExploreRooms } = roomsSlice.actions;
export default roomsSlice.reducer;
