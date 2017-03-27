var express = require('express');
var router = express.Router();

const ClientController = require('../controllers/client');

router.get('/', ClientController.index);

module.exports = router;
