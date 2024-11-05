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

// GET /ingredient - Get a Recipe based on an Ingredient
// NEED TO FIX
router.get('/ingredient', async (req: Request, res: Response) => {
    const searchTerm = req.query.term as string;
    if (!searchTerm) {
        return res.status(400).json({ error: 'Search term is required' });
    }
    function performSearch(term: string) {
        // Replace this with actual search logic
        const mockData = [
            { id: 1, name: 'Example Item 1' },
            { id: 2, name: 'Example Item 2' },
        ];
        return mockData.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    }
    const searchResults = performSearch(searchTerm);
    res.json({ searchTerm, results: searchResults });
});

// GET /recipes/:cuisine - Get a Recipe Based on a Cuisine
// NEED TO FIX
router.get('/:cuisine', async (req: Request, res: Response) => {
    const { cuisine } = req.params;
    try {
        const recipe = await Recipe.includes(cuisine);
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