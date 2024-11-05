import { Recipe } from '../types/recipe';

const API_KEY = 'PVIf+PGT3Ln4DWKqm/EbZg==TIhgCyhb4MV0Zntv';

export async function fetchRecipes(query: string): Promise<Recipe[]> {
    const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
        method: 'GET',
        headers: { 'X-Api-Key': API_KEY },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch recipes.');
    }

    const data: Recipe[] = await response.json();
    return data;
}
