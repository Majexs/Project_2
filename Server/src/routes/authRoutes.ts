import { Router, type Request, type Response } from 'express';
import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import dotenv from 'dotenv';
dotenv.config();

// POST /users - Create a New User
export const signup = async (req: Request, res: Response) => {
  const { userName , email, password } = req.body;
  try {
    const newUser = await User.create({ userName, email, password, });
    newUser.password = await bcrypt.hash(req.body.password, 10);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};


export const login = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;

  const user = await User.findOne({
    where: { userName, email },
  });

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

  return res.json({ token });

}

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
