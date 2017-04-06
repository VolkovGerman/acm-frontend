const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');
const SecureController = require('../controllers/secure');

router.get('/', ApiController.index);
router.get('/login', SecureController.login);
router.get('/logout', SecureController.logout);

module.exports = router;
