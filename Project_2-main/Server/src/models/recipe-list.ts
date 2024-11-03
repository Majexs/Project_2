import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user.js';

interface ListAttributes {
    id: number;
    listName: string;
    description: string;
    assignedUserId?: number;
}

interface ListCreationAttributes extends Optional<ListAttributes, 'id'> {}

export class List extends Model<ListAttributes, ListCreationAttributes> implements ListAttributes {
    public id!: number;
    public listName!: string;
    public description!: string;
    public assignedUserId!: number;

    public readonly assignedUser?: User;
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
            assignedUserId: {
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
