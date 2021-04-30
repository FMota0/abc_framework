const ResearchProgram = require("../models/ResearchProgram");

const getUserPrograms = async (req, res) => {
  const programs = await ResearchProgram.find({
    ownerId: req.user._id,
  });
  res.send(programs);
};

const createResearchProgram = async (req, res) => {
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
};

const getResearchProgram = async (req, res) => {
  res.send(req.researchProgram);
};

const deleteResearchProgram = async (req, res) => {
  await ResearchProgram.deleteOne({ _id: req.researchProgram._id });
  res.send();
};

const updateResearchProgram = async (req, res) => {
  const {
    title,
    description,
  } = req.body;
  const { researchProgram } = req;
  researchProgram.title = title;
  researchProgram.description = description;
  await researchProgram.save();
  res.send(researchProgram);
};

module.exports = {
  getUserPrograms,
  createResearchProgram,
  getResearchProgram,
  deleteResearchProgram,
  updateResearchProgram,
};