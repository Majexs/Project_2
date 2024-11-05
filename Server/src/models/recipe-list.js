import { DataTypes, Model } from 'sequelize';
export class List extends Model {
}
export function ListFactory(sequelize) {
    List.init({
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
    }, {
        tableName: 'list',
        sequelize,
    });
    return List;
}
