const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: String,
  email: String,
  picture: String,
});

module.exports = User;