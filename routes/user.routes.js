
import express from 'express';
const router = express.Router;  // router is instance of the Router
import{
    register,
    login,
    logout,
    getProfile
} from './../controller/user.controller.js';


router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',getProfile);

export default router;

