const express = require('express');
const router = express.Router();
const basicAuth = require('basic-auth-connect');

const AdminController = require('../controllers/admin');

/* GET home page. */
router.get('/', basicAuth('admin', 'admin'), AdminController.index);

module.exports = router;
