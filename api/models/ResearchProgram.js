const mongoose = require('mongoose');

const ResearchProgram = mongoose.model('ResearchProgram', {
  title: String,
  description: String,
  ownerId: String,
  researches: [{
    title: String,
    description: String,
    strategy: {
      type: String,
      enum: [
        "FieldExperiments",
        "ExperimentalSimulations",
        "LaboratoryExperiments",
        "JudgmentStudies",
        "SampleStudies",
        "FormalTheory",
        "ComputerSimulations",
        "FieldStudy",
      ],
    },
    link: String,
    method: String,
  }],
});

module.exports = ResearchProgram;