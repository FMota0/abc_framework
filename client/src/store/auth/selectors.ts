import { RootState } from "../types";

export const getUser = (state: RootState) => state.authState.user;

export const getIsLogged = (state: RootState) => state.authState.isLogged;
