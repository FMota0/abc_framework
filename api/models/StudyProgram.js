const mongoose = require('mongoose');

const StudyProgram = mongoose.model('Study', {
  title: String,
  description: String,
  studies: [{
    link: String,
    method: String,
  }],
});

module.exports = StudyProgram;