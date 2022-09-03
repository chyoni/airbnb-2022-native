import axios from 'axios';
import { Alert } from 'react-native';
import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import api, { ILogin } from '../api';

export interface UserState {
  isLoggedIn: boolean;
  token: string | null;
}

export interface LoginPayload {
  token: string;
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
  } as UserState,
  reducers: {
    logIn(state, action: PayloadAction<LoginPayload>) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
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
        dispatch(logIn({ token }));
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
export default userSlice.reducer;
