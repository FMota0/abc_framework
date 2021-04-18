import { createSlice } from '@reduxjs/toolkit';

import { SelectedStrategy } from './types';

const initialState: SelectedStrategy = {
  strategy: null,
};

const selectedProgramSlice = createSlice({
  name: "selectedProgamSlice",
  initialState,
  reducers: {
    setStrategy: (state, action) => {
      state.strategy = action.payload;
    }
  },
});

export const {
  setStrategy
} = selectedProgramSlice.actions;

export default selectedProgramSlice.reducer;
