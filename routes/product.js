const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.home);

router.get('/:category/:id', productControllers.info);

router.get('/search', productControllers.search);

module.exports = router