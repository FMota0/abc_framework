import { combineReducers } from "redux";

import programsSlice from "./programs/slice";
import selectedStrategySlice from "./selectedStrategy/slice";
import healthSlice from "./health/slice";
import authSlice from "./auth/slice";
import tutorialSlice from "./tutorial/slice";

const rootReducer = combineReducers({
  healthState: healthSlice,
  programsState: programsSlice,
  selectedStrategyState: selectedStrategySlice,
  authState: authSlice,
  tutorialState: tutorialSlice,
});

export default rootReducer;
