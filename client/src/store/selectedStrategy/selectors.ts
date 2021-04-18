import { createSelector } from "reselect";
import { RootState } from "../types";
import { SelectedStrategy } from "./types";

export const getSelectedStrategyState = (state: RootState) => state.selectedStrategyState;

export const getSelectedStrategy = createSelector(
  getSelectedStrategyState,
  (state: SelectedStrategy) => state.strategy
);
