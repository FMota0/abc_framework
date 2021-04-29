const express = require('express');
const { body, validationResult } = require('express-validator');
const verifyOwner = require('../middlewares/verifyOwner');
const verifyToken = require('../middlewares/verifyToken');
const ResearchProgram = require('../models/ResearchProgram');
const verifyBody = require('../middlewares/verifyBody');

const router = express.Router();

router.use(verifyToken);

router.get('/programs', async (req, res) => {
  const programs = await ResearchProgram.find({
    ownerId: req.user._id,
  });
  res.send(programs);
});

router.post(
  '/programs',
  [
    body('title').trim().notEmpty().isLength({ min: 4, max: 40 }),
    body('description').trim().notEmpty().isLength({ min: 10, max: 150 }),
   ],
  verifyBody,
  async (req, res) => {
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
  }
);

router.get('/programs/:programId', verifyOwner, async (req, res) => {
  res.send(req.researchProgram);
});

router.delete('/programs/:programId', verifyOwner, async (req, res) => {
  await ResearchProgram.deleteOne({ _id: req.researchProgram._id });
  res.send();
});

router.put(
  '/programs/:programId',
  verifyOwner,
  [
    body('title').trim().notEmpty().isLength({ min: 4, max: 40 }),
    body('description').trim().notEmpty().isLength({ min: 10, max: 150 }),
  ],
  verifyBody,
  async (req, res) => {
    const {
      title,
      description,
    } = req.body;
    const { researchProgram } = req;
    researchProgram.title = title;
    researchProgram.description = description;
    await researchProgram.save();
    res.send(researchProgram);
  }
);

module.exports = router;