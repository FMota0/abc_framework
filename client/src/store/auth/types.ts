import { ABCUser } from "../../services/types";

export interface AuthState {
  user: ABCUser | null;
};