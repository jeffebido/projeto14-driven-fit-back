import express from 'express';
import { LogIn, SignUp } from '../controllers/userController.js';
import { validSignUp } from '../middlwares/validSignUp.js';

const router = express.Router();

router.post('/signup', validSignUp, SignUp)
router.post('/login', LogIn)

export default router;