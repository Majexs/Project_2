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

// GET /lists/:id - Get Lists by ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const list = await List.findByPk(id, {
            include: [
                {
                    model: Recipe,
                    as: 'includedRecipe',
                    attributes: ['recipeName'],
                },
            ],
        });
        if (list) {
            res.json(list);
        } else {
            res.status(404).json({
                message: 'Recipe list not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

// POST /lists - Create new List
router.post('/', async (req: Request, res: Response) => {
    const { listName, description } = req.body;
    try {
      const newList = await List.create({
        listName, description
      });
      res.status(201).json(newList);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
});

// PUT /lists/:id - Update List by ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { listName, description } = req.body;
    try {
      const list = await List.findByPk(id);
      if(list) {
        list.listName = listName;
        list.description = description;
        await list.save();
        res.json(list);
      } else {
        res.status(404).json({
          message: 'List not found'
        });
      }
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
});

// DELETE /lists/:id - Delete List by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const list = await List.findByPk(id);
      if(list) {
        await list.destroy();
        res.json({ message: 'List deleted' });
      } else {
        res.status(404).json({
          message: 'List not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
});
  
export { router as favoriteRecipes };