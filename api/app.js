var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();

const healthRouter = require('./routes/health.route');
const loginRouter = require('./routes/login.route');
const programRouter = require('./routes/program.route');
const researchRouter = require('./routes/research.route');
const tutorialRouter = require('./routes/tutorial.route');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(healthRouter);
app.use(loginRouter);
app.use(programRouter);
app.use(researchRouter);
app.use(tutorialRouter);

module.exports = app;