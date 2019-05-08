const express = require('express');
const router = express.Router();

const checkoutControllers = require('../controllers/checkoutControllers');

router.get('/', checkoutControllers.home);

router.get('/done', checkoutControllers.done);

module.exports = router;