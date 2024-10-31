import { Router } from 'express';
import { recipeRouter } from './recipe-search.js';
import { favoriteRecipes } from './recipe-lists.js';
import { user } from './users.js';

const router = Router();

router.use('/recipes', recipeRouter);
router.use('/favorites', favoriteRecipes);
router.use('/users', user);

export default router;