import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../api";

export interface UserState {
  isLoggedIn: boolean;
  token: string | null;
}

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
  } as UserState,
  reducers: {
    logIn(state, action: PayloadAction<UserState>) {
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
export const userLogin = (form: any) => async (dispatch: any) => {
  try {
    const data = await login(form);
    // accept token and dispatch current user
  } catch (e) {
    console.error(e);
  }
};
export default userSlice.reducer;
