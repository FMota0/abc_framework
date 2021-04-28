const mongoose = require('mongoose');

const connectDb = () => {
  return mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
}

module.exports = connectDb;