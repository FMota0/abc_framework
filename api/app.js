var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();

const { body, validationResult } = require('express-validator');

const StudyProgram = require('./models/StudyProgram');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/studies', async (req, res) => {
  const programs = await StudyProgram.find();
  res.send(programs);
});

module.exports = app;