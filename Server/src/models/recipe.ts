import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface RecipeAttributes {
    id: number;
    recipeName: string;
    ingredients: string;
    directions: string;
}

interface RecipeCreationAttributes extends Optional<RecipeAttributes, 'id'> {}

export class Recipe extends Model<RecipeAttributes, RecipeCreationAttributes> implements RecipeAttributes {
    public id!: number;
    public recipeName!: string;
    public ingredients!: string;
    public directions!: string;

    // ADD FOREIGN KEY: LISTS
}

export function RecipeFactory(sequelize: Sequelize): typeof Recipe {
    Recipe.init(
        {
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
        },
        {
            tableName: 'recipe',
            sequelize,
        }
    );

    return Recipe;
}