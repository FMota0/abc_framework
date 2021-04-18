var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();

const { body, validationResult } = require('express-validator');

const ResearchProgram = require('./models/ResearchProgram');
const verifyToken = require('./middlewares/verifyToken');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const authedApp = express.Router();
authedApp.use(verifyToken);

app.get('/health', async (req, res) => {
  res.send("OK");
});

authedApp.get('/research', async (req, res) => {
  const programs = await ResearchProgram.find({
    ownerId: req.user._id,
  });
  res.send(programs);
});

authedApp.post('/research', async (req, res) => {
  const {
    title,
    description,
  } = req.body;

  const newResearchProgram = new ResearchProgram({
    title,
    description,
    ownerId: req.user._id,
  });

  await newResearchProgram.save();
  res.send(newResearchProgram);
});

authedApp.get('/research/:id', async (req, res) => {
  const { id } = req.params;
  const researchProgram = await ResearchProgram.findById(id);
  if (researchProgram.ownerId !== req.user._id.toString()) {
    return res.status(401).send("Não autorizado");
  }
  res.send(researchProgram);
});

authedApp.delete('/research/:id', async (req, res) => {
  const { id } = req.params;
  const researchProgram = await ResearchProgram.findById(id);
  if (researchProgram.ownerId !== req.user._id.toString()) {
    return res.status(401).send("Não autorizado");
  }
  await ResearchProgram.deleteOne({ _id: id });
  res.send();
});

authedApp.put('/research/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    strategy,
    link,
    method,
  } = req.body;
  const researchProgram = await ResearchProgram.findById(id);
  if (researchProgram.ownerId !== req.user._id.toString()) {
    return res.status(401).send("Não autorizado");
  }
  researchProgram.researches = [
    ...researchProgram.researches,
    {
      title,
      description,
      strategy,
      link,
      method,
    },
  ];
  await researchProgram.save();
  res.send(researchProgram);
});

authedApp.post('/login', async (req, res) => {
  res.send(req.user);
});

app.use(authedApp);

module.exports = app;