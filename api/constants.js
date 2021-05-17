const strategies = [
  "FieldExperiments",
  "ExperimentalSimulations",
  "LaboratoryExperiments",
  "JudgmentStudies",
  "SampleStudies",
  "FormalTheory",
  "ComputerSimulations",
  "FieldStudy",
];

const PROGRAM_TITLE_LENGTH = {
  min: 4,
  max: 40,
};

const PROGRAM_DESCRIPTION_LENGTH = {
  min: 10,
  max: 200,
};

module.exports = {
  strategies,
  PROGRAM_TITLE_LENGTH,
  PROGRAM_DESCRIPTION_LENGTH,
};
