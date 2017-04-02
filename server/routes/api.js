const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');

router.get('/', ApiController.index);

module.exports = router;
