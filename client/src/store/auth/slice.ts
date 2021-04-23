import { createSlice } from "@reduxjs/toolkit";

import { AuthState } from "./types";

const initialState: AuthState = {
  user: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const {
  setUser,
  setIsLogged,
} = authSlice.actions;

export default authSlice.reducer;
