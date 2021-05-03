import ABCApiService from "../../services/abcApi";
import { setInfos } from "./slice";

export const fetchTutorialInfos = () => async (dispatch: any) => {
  try {
    const infos = await ABCApiService.getTutorialInfos();
    dispatch(setInfos(infos));
  } catch (e) {

  }
}