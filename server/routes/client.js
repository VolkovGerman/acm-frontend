var express = require('express');
var router = express.Router();

const ClientController = require('../controllers/client');

router.get('/', ClientController.index);
router.get('/login', ClientController.login);
router.get('/logout', ClientController.logout);

module.exports = router;
