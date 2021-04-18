import { combineReducers } from "redux";

import programsSlice from "./programs/slice";

const rootReducer = combineReducers({
  programsSlice,
});

export default rootReducer;
