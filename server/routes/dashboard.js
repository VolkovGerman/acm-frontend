const express = require('express');
const router = express.Router();

const DashboardController = require('../controllers/dashboard');
const SecureController = require('../controllers/secure');

router.use(SecureController.checkCookiesToken, DashboardController.index);

module.exports = router;
