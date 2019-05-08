const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');

/* GET home page. */
router.get('/', homeControllers.home);

router.get('/login', homeControllers.loginGet);

router.get('/recover', homeControllers.recoverGet);

router.get('/register', homeControllers.registerGet);

module.exports = router;
