import { createSlice } from "@reduxjs/toolkit";

import { TutorialState } from "./types";

const initialState: TutorialState = {
  infos: [],
};

const tutorialSlice = createSlice({
  name: "tutorialSlice",
  initialState,
  reducers: {
    setInfos: (state, action) => {
      state.infos = action.payload;
    },
  },
});

export const { setInfos } = tutorialSlice.actions;

export default tutorialSlice.reducer;
