import { history } from "../../history";

import ABCApiService from "../../services/abcApi"
import { setUser } from "./slice";


export const login = (token: string) => async (dispatch: any) => {
  try {
    localStorage.setItem("authToken", token);
    const user = await ABCApiService.login();
    dispatch(setUser(user));
    history.push("/dashboard");
  } catch (e) {
    
  }
}

export const logout = () => async (dispatch: any) => {
  try {
    history.push("/");
    localStorage.setItem("authToken", "");
    dispatch(setUser(null));
  } catch (e) {

  }
}