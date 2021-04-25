export enum StrategyTypes {
  FieldExperiments = "FieldExperiments",
  ExperimentalSimulations = "ExperimentalSimulations",
  LaboratoryExperiments = "LaboratoryExperiments",
  JudgmentStudies = "JudgmentStudies",
  SampleStudies = "SampleStudies",
  FormalTheory = "FormalTheory",
  ComputerSimulations = "ComputerSimulations",
  FieldStudy = "FieldStudy",
};

export interface Research {
  _id: string;
  title: string;
  description: string;
  strategy: StrategyTypes;
  link: string;
  method: string;
};

export interface ResearchProgram {
  _id: string;
  title: string;
  description: string;
  researches: Research[];
};
