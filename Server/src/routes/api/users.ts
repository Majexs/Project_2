import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/user.js';

const router = express.Router();

// GET /users/:id - Get a User by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if(user) {
      res.json(user);
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// PUT /users/:id - Update a User by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userName, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if(user) {
      user.userName = userName;
      user.password = password;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:id - Delete a User by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if(user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({
          message: 'User not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  });
  
export { router as userRouter };