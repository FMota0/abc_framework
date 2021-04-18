import { createSlice } from '@reduxjs/toolkit';
import { ResearchProgram } from '../../types';

import { ProgramsState } from './types';

const initialState: ProgramsState = {
  programs: {},
};

const programsSlice = createSlice({
  name: "programsSlice",
  initialState,
  reducers: {
    setPrograms: (state, action) => {
      const programsArr = action.payload;
      state.programs = programsArr.reduce((acc: Record<string, ResearchProgram>, cur: ResearchProgram) => {
        return {
          ...acc,
          [cur._id]: cur,
        };
      }, {});
    },
    setProgram: (state, action) => {
      const program = action.payload;
      state.programs[program._id] = program;
    },
  },
});

export const {
  setPrograms,
  setProgram,
} = programsSlice.actions;

export default programsSlice.reducer;