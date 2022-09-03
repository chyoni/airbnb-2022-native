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
}

export interface PhotoType {
  id: number;
  created: string;
  modified: string;
  file: string;
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
}

const roomsSlice = createSlice({
  name: 'rooms',
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
    },
    increasePage(state) {
      state.explore.page += 1;
    },
    setFavs(state, action: PayloadAction<RoomType[]>) {
      state.favs = action.payload;
    },
  },
});

export const { setExploreRooms, increasePage, setFavs } = roomsSlice.actions;

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
          })
        );
      }
    } catch (e) {
      console.warn(e);
    }
  };

export default roomsSlice.reducer;
