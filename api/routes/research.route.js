const express = require('express');
const { body } = require('express-validator');
const verifyToken = require('../middlewares/verifyToken');
const verifyOwner = require('../middlewares/verifyOwner');
const verifyBody = require('../middlewares/verifyBody');
const { strategies } = require('../constants');

const router = express.Router();

router.use(verifyToken);

router.post(
  '/programs/:programId',
  verifyOwner,
  [
    body('title').trim().notEmpty().isLength({ min: 4, max: 40 }),
    body('description').trim().notEmpty().isLength({ min: 10, max: 150 }),
    body('link').trim().notEmpty().isURL(),
    body('strategy').trim().isIn(strategies),
  ],
  verifyBody,
  async (req, res) => {
    const {
      title,
      description,
      strategy,
      link,
      method,
    } = req.body;
    const { researchProgram } = req;
    researchProgram.researches = [
      ...researchProgram.researches,
      {
        title,
        description,
        strategy,
        link,
        method,
      }
    ];
    await researchProgram.save();
    res.send(researchProgram);
  }
);

router.put(
  '/programs/:programId/:id',
  verifyOwner,
  [
    body('title').trim().notEmpty().isLength({ min: 4, max: 40 }),
    body('description').trim().notEmpty().isLength({ min: 10, max: 150 }),
    body('link').trim().notEmpty().isURL(),
  ],
  verifyBody,
  async (req, res) => {
    const { id } = req.params;
    const { title, description, link } = req.body;
    const { researchProgram } = req;

    const research = researchProgram.researches
      .find(({ _id }) => _id.toString() === id);
    
    research.title = title;
    research.description = description;
    research.link = link;

    await researchProgram.save();
    res.send(researchProgram);
  }
);

router.delete('/programs/:programId/:id', verifyOwner, async (req, res) => {
  const { id } = req.params;
  const { researchProgram } = req;
  
  researchProgram.researches = researchProgram.researches
    .filter(({ _id }) => _id.toString() !== id);
  
  await researchProgram.save();

  res.send(researchProgram);
});

module.exports = router;