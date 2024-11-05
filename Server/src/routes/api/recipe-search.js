import * as express from 'express';
import { Recipe } from '../../models/recipe.js';
const router = express.Router();
// GET /recipes - Get all recipes
router.get('/', async (_req, res) => {
    try {
        const recipes = Recipe.findAll();
        res.json(recipes);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
export { router as recipeRouter };
