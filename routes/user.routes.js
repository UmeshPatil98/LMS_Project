
const express =require('express');
const router = express.Router;  // router is instance of the Router
const{
    register,
    login,
    logout,
    getProfile
} = require('./../controller/user.controller');


router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',getProfile);

module.exports = router;

