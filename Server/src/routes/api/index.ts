import { Router } from 'express';
import { recipeRouter } from './recipe-search.js';
import { favoriteRecipes } from './recipe-lists.js';
import { userRouter } from './users.js';

const router = Router();

router.use('/recipes', recipeRouter);
router.use('/favorites', favoriteRecipes);
router.use('/users', userRouter);

export default router;