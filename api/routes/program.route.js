const express = require('express');
const { body } = require('express-validator');

const verifyOwner = require('../middlewares/verifyOwner');
const verifyToken = require('../middlewares/verifyToken');
const verifyBody = require('../middlewares/verifyBody');
const {
  getUserPrograms,
  createResearchProgram,
  getResearchProgram,
  deleteResearchProgram,
  updateResearchProgram,
} = require('../controllers/program.controller');
const { PROGRAM_TITLE_LENGTH, PROGRAM_DESCRIPTION_LENGTH } = require('../constants');

const router = express.Router();

router.use(verifyToken);
router.post(
  '/programs',
  [
    body('title')
      .trim()
      .notEmpty()
      .isLength(PROGRAM_TITLE_LENGTH),
    body('description')
      .trim()
      .notEmpty()
      .isLength(PROGRAM_DESCRIPTION_LENGTH),
   ],
  verifyBody,
  createResearchProgram
);

router.get('/programs', getUserPrograms);

router.get(
  '/programs/:programId',
  verifyOwner,
  getResearchProgram
);

router.delete(
  '/programs/:programId',
  verifyOwner,
  deleteResearchProgram
);

router.put(
  '/programs/:programId',
  verifyOwner,
  [
    body('title').trim().notEmpty().isLength(PROGRAM_TITLE_LENGTH),
    body('description').trim().notEmpty().isLength(PROGRAM_DESCRIPTION_LENGTH),
  ],
  verifyBody,
  updateResearchProgram
);

module.exports = router;