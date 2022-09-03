import axios from 'axios';
import { Alert, AppState } from 'react-native';
import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import api, { ILogin } from '../api';
import { RootState } from './store';
import { setExploreRooms, setFav, setFavs, getRooms } from './roomsSlice';

export interface UserState {
  isLoggedIn: boolean;
  token: string | null;
  id: number | null;
}

export interface LoginPayload {
  token: string;
  id: number;
}

export interface UserType {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name?: string;
  avatar?: string;
  superhost: boolean;
}

const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
  } as UserState,
  reducers: {
    logIn(state, action: PayloadAction<LoginPayload>) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.id = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userLogin =
  (form: ILogin) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await api.login(form);
      if (res?.data.token && res.status === 200) {
        const token = res.data.token;
        const id = res.data.id;
        dispatch(logIn({ token, id }));
      }
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        if (e.response.status === 401) {
          Alert.alert('Username or Password wrong');
          return;
        }
      }
    }
  };
export const getFavs =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const state = getState();
      const token = state.usersReducer.token;
      if (token) {
        const res = await api.favs(token);
        if (res?.status === 200) {
          dispatch(setFavs(res.data));
        }
      } else {
        Alert.alert('Please login');
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };
export const toggleFav =
  (roomId: number) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const state = getState();
      const token = state.usersReducer.token;
      if (roomId && token) {
        const res = await api.toggleFavs(roomId, token);
        if (res?.status === 200) {
          dispatch(setFav({ roomId }));
          getRooms(1);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
export default userSlice.reducer;
