const express = require('express');
const router = express.Router();
const accountControllers = require('../controllers/accountControllers');

router.get('/', accountControllers.editGet);

module.exports = router