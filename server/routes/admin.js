const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/admin');

router.get('/', AdminController.secure, AdminController.index);

module.exports = router;
