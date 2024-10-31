import React, { useState } from 'react';
import { fetchRecipes } from '../api/recipeService';
import { Recipe } from '../types/recipe';

const RecipeSearch: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        try {
            setError(null); // Reset error
            const data = await fetchRecipes(query);
            setRecipes(data);
        } catch (err) {
            setError('Could not fetch recipes. Please try again.');
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Search for Recipes</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter recipe name"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <h3>{recipe.title}</h3>
                        <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                        <p>Instructions: {recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSearch;