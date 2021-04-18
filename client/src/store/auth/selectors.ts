import { RootState } from "../types";

export const getUser = (state: RootState) => state.authState.user;
