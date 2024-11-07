import { DataTypes, Sequelize, Model, Optional, ForeignKey, BelongsToManyAddAssociationMixin } from 'sequelize';
import { User } from './user.js';
import { Recipe } from './recipe.js';

interface ListAttributes {
    id: number;
    listName: string;
    description: string;
    userId: number;
}

interface ListCreationAttributes extends Optional<ListAttributes, 'id'> {}

export class List extends Model<ListAttributes, ListCreationAttributes> implements ListAttributes {
    public id!: number;
    public listName!: string;
    public description!: string;
    public userId!: ForeignKey<User['id']>;

    public addRecipe!: BelongsToManyAddAssociationMixin<Recipe, Recipe['id']>;
}

export function ListFactory(sequelize: Sequelize): typeof List {
    List.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            listName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'list',
            sequelize,
        }
    );

    return List;
}
