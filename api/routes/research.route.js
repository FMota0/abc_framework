const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const verifyOwner = require('../middlewares/verifyOwner');
const router = express.Router();

router.use(verifyToken);

router.post('/programs/:programId', verifyOwner, async (req, res) => {
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
});

router.put('/programs/:programId/:id', verifyOwner, async (req, res) => {
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
});

router.delete('/programs/:programId/:id', verifyOwner, async (req, res) => {
  const { id } = req.params;
  const { researchProgram } = req;
  
  researchProgram.researches = researchProgram.researches
    .filter(({ _id }) => _id.toString() !== id);
  
  await researchProgram.save();

  res.send(researchProgram);
});

module.exports = router;