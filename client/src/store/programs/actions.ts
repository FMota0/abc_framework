import { history } from '../../history';
import ABCApiService from '../../services/abcApi';
import { setStrategy } from '../selectedStrategy/slice';

import { setPrograms, setProgram } from './slice';

export const fetchResearchPrograms = () => async (dispatch: any) => {
  try {
    const programs = await ABCApiService.fetchResearches();
    dispatch(setPrograms(programs));
  } catch (e) {

  }
}

export const addResearchProgram = (newResearchProgram: any) => async (dispatch: any) => {
  try {
    await ABCApiService.addResearchProgram(newResearchProgram);
    await dispatch(fetchResearchPrograms());
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

export const addResearch = (id: string, newResearch: any) => async (dispatch: any) => {
  try {
    await ABCApiService.addResearch(id, newResearch);
    await dispatch(fetchResearchProgram(id));
    dispatch(setStrategy(null));
  } catch (e) {

  }
}

export const deleteResearchProgram = (id: string) => async (dispatch: any) => {
  try {
    await ABCApiService.deleteResearch(id);
    history.push('/dashboard');
  } catch (e) {

  }
}

export const deleteResearch = (researchProgram: string, id: string) => async (dispatch: any) => {
  try {
    console.log(`invoking ${researchProgram} ${id}`);
    await dispatch(fetchResearchProgram(researchProgram));
  } catch (e) {

  }
}