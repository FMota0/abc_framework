import { RootState } from "../types";

export const getHealthState = (state: RootState) => state.healthState;

export const hasRecentHealth = (state: RootState) => {
  const limitHealth = state.healthState.timestampLastHealth + 60*60*1000;
  return limitHealth > new Date().getTime();
};
