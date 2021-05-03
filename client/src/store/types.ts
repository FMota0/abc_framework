import { HealthState } from "./health/types";
import { ProgramsState } from "./programs/types";
import { SelectedStrategy } from "./selectedStrategy/types";
import { AuthState } from "./auth/types";
import { TutorialState } from "./tutorial/types";

export interface RootState {
  programsState: ProgramsState;
  selectedStrategyState: SelectedStrategy;
  healthState: HealthState;
  authState: AuthState;
  tutorialState: TutorialState;
};
