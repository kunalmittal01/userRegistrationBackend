import express from 'express';
import { validateUser } from '../middleware/user.js';
import { registerUser } from '../controller/user.js';
const userRouter = express.Router();

userRouter.post('/register', validateUser, registerUser);

export default userRouter;