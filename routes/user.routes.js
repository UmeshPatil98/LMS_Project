
const express =require('express');
const { route } = require('../app');
const router = express.Router;  // router is instance of the Router

router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',getProfile);

module.exports = router;

