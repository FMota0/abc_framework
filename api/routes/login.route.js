const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.use(verifyToken);
router.post('/login', async (req, res) => res.send(req.user));

module.exports = router;