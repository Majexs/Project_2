import express from 'express';
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

// GET /recipes/:cuisine - Get a recipe by Cuisine
router.get('/:cuisine', async (req: Request, res: Response) => {
    const { cuisine } req.params;
    try {
        const recipe = await Recipe.findByPk(cuisine);
        if(recipe) {
            res.json(recipe);
        } else {
            res.status(404).json({
                message: 'Recipe not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

export { router as recipeRouter };