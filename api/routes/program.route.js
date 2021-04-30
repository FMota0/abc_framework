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

const router = express.Router();

router.use(verifyToken);

router.get('/programs', getUserPrograms);

router.post(
  '/programs',
  [
    body('title').trim().notEmpty().isLength({ min: 4, max: 40 }),
    body('description').trim().notEmpty().isLength({ min: 10, max: 150 }),
   ],
  verifyBody,
  createResearchProgram
);

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
    body('title').trim().notEmpty().isLength({ min: 4, max: 40 }),
    body('description').trim().notEmpty().isLength({ min: 10, max: 150 }),
  ],
  verifyBody,
  updateResearchProgram
);

module.exports = router;