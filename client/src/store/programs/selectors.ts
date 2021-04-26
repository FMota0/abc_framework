import { forEach, values, filter, find, propEq } from "ramda";
import { ResearchProgram, StrategyTypes, Research } from "../../types";

import { RootState } from "../types";

export const getResearchPrograms = (state: RootState): ResearchProgram[] => values(state.programsState.programs);

export const getResearchProgram = (id: string) => (state: RootState) => state.programsState.programs[id];

export const getResearches = (id: string, strategy: StrategyTypes) => 
  (state: RootState) => filter(
    (research: Research) => research.strategy === strategy
  , state.programsState.programs[id].researches);

export const getNumberOfResearchesByStrategy = (id: string) => (state: RootState): Record<StrategyTypes, number> => {
  const res: Record<StrategyTypes, number> = {
    [StrategyTypes.FieldExperiments]: 0,
    [StrategyTypes.ExperimentalSimulations]: 0,
    [StrategyTypes.LaboratoryExperiments]: 0,
    [StrategyTypes.JudgmentStudies]: 0,
    [StrategyTypes.SampleStudies]: 0,
    [StrategyTypes.FormalTheory]: 0,
    [StrategyTypes.ComputerSimulations]: 0,
    [StrategyTypes.FieldStudy]: 0,
  };
  const researchProgram = state.programsState.programs[id];
  forEach((program: Research) => {
    res[program.strategy] += 1;
  }, researchProgram.researches);
  return res;
};

export const getResearch = (researchProgramId: string, id: string) => (state: RootState): Research | undefined => {
  return find(
    propEq('_id', id),
    state.programsState.programs[researchProgramId].researches
  );
};
