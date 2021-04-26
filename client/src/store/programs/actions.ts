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
    dispatch(setStrategy(newResearch.strategy));
  } catch (e) {

  }
}

export const deleteResearchProgram = (id: string) => async (dispatch: any) => {
  try {
    await ABCApiService.deleteResearchProgram(id);
    history.push('/dashboard');
  } catch (e) {

  }
}

export const deleteResearch = (researchId: string, id: string) => async (dispatch: any) => {
  try {
    await ABCApiService.deleteResearch(researchId, id);
    await dispatch(fetchResearchProgram(researchId));
  } catch (e) {

  }
}

export const editResearchProgram = (id: string, researchProgram: any) => async (dispatch: any) => {
  try {
    await ABCApiService.editResearchProgram(id, researchProgram);
    await dispatch(fetchResearchProgram(id));
  } catch (e) {

  }
}