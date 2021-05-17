const express = require('express');
const { body } = require('express-validator');
const verifyToken = require('../middlewares/verifyToken');
const verifyOwner = require('../middlewares/verifyOwner');
const verifyBody = require('../middlewares/verifyBody');
const { strategies, PROGRAM_TITLE_LENGTH, PROGRAM_DESCRIPTION_LENGTH } = require('../constants');
const { createResearch, updateResearch, deleteResearch } = require('../controllers/research.controller');

const router = express.Router();

router.use(verifyToken);

router.post(
  '/programs/:programId',
  verifyOwner,
  [
    body('title').trim().notEmpty().isLength(PROGRAM_TITLE_LENGTH),
    body('description').trim().notEmpty().isLength(PROGRAM_DESCRIPTION_LENGTH),
    body('link').trim().notEmpty().isURL(),
    body('strategy').trim().isIn(strategies),
  ],
  verifyBody,
  createResearch
);

router.put(
  '/programs/:programId/:id',
  verifyOwner,
  [
    body('title').trim().notEmpty().isLength(PROGRAM_TITLE_LENGTH),
    body('description').trim().notEmpty().isLength(PROGRAM_DESCRIPTION_LENGTH),
    body('link').trim().notEmpty().isURL(),
  ],
  verifyBody,
  updateResearch
);

router.delete(
  '/programs/:programId/:id',
  verifyOwner,
  deleteResearch
);

module.exports = router;