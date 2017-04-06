var express = require('express');
var router = express.Router();

const HomeController = require('../controllers/home');

router.use(HomeController.index);

module.exports = router;
