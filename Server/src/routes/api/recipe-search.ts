import * as express from 'express';
import type { Request, Response } from 'express';
import { Recipe } from '../../models/recipe.js';

const router = express.Router();

// GET /recipes - Get all recipes
router.get('/', async (_req: Request, res: Response) => {
    try {
        const recipes = Recipe.findAll();
        res.json(recipes);
    }   catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

export { router as recipeRouter };