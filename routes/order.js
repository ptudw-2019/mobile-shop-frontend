const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderControllers');

router.get('/', orderControllers.home);

module.exports = router