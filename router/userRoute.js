import express from 'express';
import { LogIn, SignUp } from '../controllers/userController.js';
import { validPassword } from '../middlwares/validPassword.js';
import { validSignUp } from '../middlwares/validSignUp.js';
import { validLogIn } from '../middlwares/validLogIn.js';

const router = express.Router();

router.post('/signup', validSignUp, SignUp)
router.post('/login', validLogIn, validPassword, LogIn)

export default router; 