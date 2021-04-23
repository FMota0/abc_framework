import ABCApiService from "../../services/abcApi";
import { setTimestamp, setIsBroken, setIsLoading } from './slice';

export const getHealth = () => async (dispatch: any) => {
  try {
    dispatch(setIsLoading(true));
    const health = await ABCApiService.health();
    if (health !== "OK")
      dispatch(setIsBroken(true));
    dispatch(setIsLoading(false));
    dispatch(setTimestamp(new Date().getTime()));
  } catch (e) {
    dispatch(setIsBroken(true));
  }
}
