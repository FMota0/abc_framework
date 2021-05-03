const mongoose = require('mongoose');

const TutorialInfo = mongoose.model('TutorialInfo', {
  title: String,
  description: String,
});

module.exports = TutorialInfo;
