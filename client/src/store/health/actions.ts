import ABCApiService from "../../services/abcApi";
import { setTimestamp, setIsBroken } from './slice';

export const getHealth = () => async (dispatch: any) => {
  try {
    const health = await ABCApiService.health();
    if (health !== "OK")
      dispatch(setIsBroken(true));
    dispatch(setTimestamp(new Date().getTime()));
  } catch (e) {
    
  }
}
