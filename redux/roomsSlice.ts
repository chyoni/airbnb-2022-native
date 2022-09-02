import { Action, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import api from "../api";

export interface RoomsState {
  explore: {
    page: number;
    rooms: RoomType[] | any;
  };
  favs: [];
}

export interface RoomType {
  id?: number | any;
  name?: string | any;
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
      state.explore.rooms.push(action.payload.rooms as any);
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
