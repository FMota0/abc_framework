import { combineReducers } from "redux";

import programsSlice from "./programs/slice";
import selectedStrategySlice from "./selectedStrategy/slice";
import healthSlice from "./health/slice";
import authSlice from "./auth/slice";

const rootReducer = combineReducers({
  healthState: healthSlice,
  programsState: programsSlice,
  selectedStrategyState: selectedStrategySlice,
  authState: authSlice,
});

export default rootReducer;
