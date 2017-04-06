const express = require('express');
const router = express.Router();

const DashboardController = require('../controllers/dashboard');
const SecureController = require('../controllers/secure');

router.get('/', SecureController.checkCookiesToken, DashboardController.index);

module.exports = router;
