const mongoose = require('mongoose');
const { strategies } = require('../constants');

const ResearchProgram = mongoose.model('ResearchProgram', {
  title: String,
  description: String,
  ownerId: String,
  researches: [{
    title: String,
    description: String,
    strategy: {
      type: String,
      enum: strategies,
    },
    link: String,
    method: String,
  }],
});

module.exports = ResearchProgram;