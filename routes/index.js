const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');

/* GET home page. */
router.get('/', homeControllers.home);

router.get('/login', homeControllers.loginGet);

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/recover', homeControllers.recoverGet);

router.get('/register', homeControllers.registerGet);

router.post('/register', homeControllers.registerPost);

router.get('/logout', homeControllers.logout);

module.exports = router;
