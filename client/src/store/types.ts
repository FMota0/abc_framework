import { HealthState } from "./health/types";
import { ProgramsState } from "./programs/types";
import { SelectedStrategy } from "./selectedStrategy/types";
import { AuthState } from "./auth/types";

export interface RootState {
  programsState: ProgramsState;
  selectedStrategyState: SelectedStrategy;
  healthState: HealthState;
  authState: AuthState;
};
