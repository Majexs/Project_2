import { DataTypes, Model } from 'sequelize';
export class Recipe extends Model {
}
export function RecipeFactory(sequelize) {
    Recipe.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        recipeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'recipe',
        sequelize,
    });
    return Recipe;
}
