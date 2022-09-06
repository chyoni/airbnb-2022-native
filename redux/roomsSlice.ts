import { RootState } from './store';
import { Action, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';
import { UserType } from './usersSlice';

export interface RoomsState {
  explore: {
    page: number;
    rooms: RoomType[];
  };
  favs: RoomType[];
  searchResult: RoomType[];
}

export interface PhotoType {
  id: number;
  created: string;
  modified: string;
  file: string;
  caption: string;
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
  photos?: PhotoType[];
}

export interface ISetExploreRoomsPayload {
  rooms: RoomType[];
  page?: number;
}

interface ISetFavPayload {
  roomId: number;
}

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
    searchResult: [],
  } as RoomsState,
  reducers: {
    setExploreRooms(state, action: PayloadAction<ISetExploreRoomsPayload>) {
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        state.explore.rooms = [...state.explore.rooms, ...payload.rooms];
      }
    },
    increasePage(state) {
      state.explore.page += 1;
    },
    setFavs(state, action: PayloadAction<RoomType[]>) {
      state.favs = action.payload;
    },
    setFav(state, action: PayloadAction<ISetFavPayload>) {
      const {
        payload: { roomId },
      } = action;
      const room = state.explore.rooms.find((room) => room.id === roomId);
      if (room) {
        if (room.is_fav) {
          room.is_fav = false;
          state.favs = state.favs.filter((room) => room.id !== roomId);
        } else {
          room.is_fav = true;
          state.favs.push(room);
        }
      }
    },
    search(state, action: PayloadAction<RoomType[]>) {
      state.searchResult = action.payload;
    },
  },
});

export const { setExploreRooms, increasePage, setFavs, setFav, search } =
  roomsSlice.actions;

export const getRooms =
  (page: number) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const token = getState().usersReducer.token;
      let res = null;
      if (token) {
        res = await api.rooms(page, token);
      } else {
        res = await api.rooms(page);
      }
      if (res?.status === 200 && res.data.results) {
        const rooms = res.data.results;
        dispatch(
          setExploreRooms({
            rooms,
            page,
          })
        );
      }
    } catch (e) {
      console.warn(e);
    }
  };

export const searchRooms =
  (params: any) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const token = getState().usersReducer.token;
      let res = null;
      if (token) {
        res = await api.search(params, token);
      } else {
        res = await api.search(params);
      }

      if (res?.status === 200) {
        console.log(res.data);
        // TODO: dispatch
      }
    } catch (e) {
      console.error(e);
    }
  };

export default roomsSlice.reducer;
