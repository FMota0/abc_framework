import { history } from '../../history';
import ABCApiService from '../../services/abcApi';

import { setPrograms, setProgram } from './slice';

export const fetchResearchPrograms = () => async (dispatch: any) => {
  try {
    const programs = await ABCApiService.fetchResearches();
    dispatch(setPrograms(programs));
  } catch (e) {

  }
}

export const fetchResearchProgram = (id: string) => async (dispatch: any) => {
  try {
    const program = await ABCApiService.fetchResearch(id);
    dispatch(setProgram(program));
  } catch (e) {
    
  }
};

export const deleteResearchProgram = (id: string) => async (dispatch: any) => {
  try {
    await ABCApiService.deleteResearch(id);
    history.push('/dashboard');
  } catch (e) {

  }
}