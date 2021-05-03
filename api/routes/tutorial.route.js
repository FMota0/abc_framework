const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const TutorialInfo = require('../models/TutorialInfo');
const router = express.Router();

router.use(verifyToken);

router.get('/tutorial', async (_, res) => {
  const infos = await TutorialInfo.find({});
  res.send(infos);
});

module.exports = router;