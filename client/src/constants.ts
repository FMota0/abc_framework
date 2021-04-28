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

export const selectedStrategyDescription = {
  [StrategyTypes.ComputerSimulations]: "Essa estratégia é caracterizada pela criação de um modelo para representar e simular um sistema ou fenômeno do mundo real, que em geral seria complicado e custoso de ser observado se não fosse por simulação.",
  [StrategyTypes.ExperimentalSimulations]: "Essa estratégia é caracterizada pela busca entre balancear a medida de comportamentos emergentes de cenários reais e conseguir obter um grau de realismo.",
  [StrategyTypes.FieldExperiments]: "Essa estratégia é caracterizada pela análise dos efeitos de manipulações em um cenário real.",
  [StrategyTypes.FieldStudy]: "Essa estratégia é caracterizada pelo estudo de fenômenos em ambientes naturais com intuito de determinar o que acontece e como acontece.",
  [StrategyTypes.FormalTheory]: "Essa estratégia é caracterizada por ser utilizada quando a área de interesse possui um grande número de estudos empíricos, mas sem um estudo que integre as descobertas.",
  [StrategyTypes.LaboratoryExperiments]: "Essa estratégia é caracterizada por ser utilizada quando se requer um alto nível de precisão sobre o que está sendo pesquisado e analisado.",
  [StrategyTypes.JudgmentStudies]: "Essa estratégia é caracterizada por ser utilizada quando se busca obter um grau de generalizabilidade sobre respostas de parcitipantes em uma determinada pesquisa.",
  [StrategyTypes.SampleStudies]: "Essa estratégia é caracterizada por ser utilizada quando se busca obter o maior grau de generalizabilidade sobre um população, pode ser essa população desenvolvedores, gerentes, artefatos de software, projetos, ...",
};

export const strategyMethods = {
  [StrategyTypes.ComputerSimulations]: ["Criação de modelo do mundo real"],
  [StrategyTypes.ExperimentalSimulations]: ["Experimentos por simulação"],
  [StrategyTypes.FieldExperiments]: ["Experimento controlado", "Pesquisa-ação"],
  [StrategyTypes.FieldStudy]: ["Estudo de caso", "Etinografia", "Pesquisa de arquivo"],
  [StrategyTypes.FormalTheory]: ["Revisão de literatura", "Teoria"],
  [StrategyTypes.JudgmentStudies]: ["Estudo delphi", "Grupo focal"],
  [StrategyTypes.LaboratoryExperiments]: ["Experimento em laboratório"],
  [StrategyTypes.SampleStudies]: ["Questionário"],
};