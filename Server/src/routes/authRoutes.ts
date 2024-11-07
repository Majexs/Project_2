import { Router, type Request, type Response } from 'express';
import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import dotenv from 'dotenv';
dotenv.config();

// POST /signup - Create a New User
export const signup = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

// POST /login - Logs into existing User
export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const user = await User.findOne({
    where: { userName },
  });

  if (!user) {
    return res.status(401).json({ message: 'Cannot find user' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Password incorrect' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ userName }, secretKey, { expiresIn: '1h' });

  return res.json({ token });

}

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
