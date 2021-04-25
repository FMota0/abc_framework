import { StrategyTypes } from "./types";

export const GOOGLE_CLIENT_ID = "189698168491-oe8amr12993qps0cqtm90bid15sj1hoo.apps.googleusercontent.com";

export const STRATEGIES = [
  StrategyTypes.FieldExperiments,
  StrategyTypes.ExperimentalSimulations,
  StrategyTypes.LaboratoryExperiments,
  StrategyTypes.JudgmentStudies,
  StrategyTypes.SampleStudies,
  StrategyTypes.FormalTheory,
  StrategyTypes.ComputerSimulations,
  StrategyTypes.FieldStudy,
];

export const selectedStrategyTitle = {
  [StrategyTypes.ComputerSimulations]: "Simulação de computador",
  [StrategyTypes.ExperimentalSimulations]: "Simulações experimentais",
  [StrategyTypes.FieldExperiments]: "Experimentos de campo",
  [StrategyTypes.FieldStudy]: "Estudo de campo",
  [StrategyTypes.FormalTheory]: "Teoria formal",
  [StrategyTypes.LaboratoryExperiments]: "Experimentos de laboratório",
  [StrategyTypes.JudgmentStudies]: "Estudos de julgamento",
  [StrategyTypes.SampleStudies]: "Estudos de amostra",
};
