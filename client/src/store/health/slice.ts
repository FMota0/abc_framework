import { createSlice } from '@reduxjs/toolkit';

import { HealthState } from './types';

const initialState: HealthState = {
  timestampLastHealth: 0,
  isBroken: false,
};

const healthSlice = createSlice({
  name: "healthSlice",
  initialState,
  reducers: {
    setTimestamp: (state, action) => {
      state.timestampLastHealth = action.payload;
    },
    setIsBroken: (state, action) => {
      state.isBroken = action.payload;
    }
  },
});

export const { setTimestamp, setIsBroken } = healthSlice.actions;

export default healthSlice.reducer;