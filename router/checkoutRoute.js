import express from 'express';
import { LogIn, SignUp } from '../controllers/userController.js';
import { validPassword } from '../middlwares/validPassword.js';
import { validSignUp } from '../middlwares/validSignUp.js';
import { validLogIn } from '../middlwares/validLogIn.js';
import { checkedOut } from '../controllers/checkoutController.js';

const router = express.Router();

router.post('/checkout', checkedOut)

export default router; 