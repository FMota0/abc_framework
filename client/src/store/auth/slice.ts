import { createSlice } from "@reduxjs/toolkit";

import { AuthState } from "./types";

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
