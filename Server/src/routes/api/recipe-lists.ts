import express from 'express';
import type { Request, Response } from 'express';
import { List } from '../../models/recipe-list.js';
import { Recipe } from '../../models/recipe.js';

const router = express.Router();

// GET /lists - Get all Lists
router.get('/', async (_req: Request, res: Response) => {
    try {
        const lists = await List.findAll({
            include: [
                {
                    model: Recipe,
                    as: 'includedRecipe',
                    attributes:['recipeName',]
                },
            ],
        });
        res.json(lists);
    }   catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});