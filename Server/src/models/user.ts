import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface UserAttributes {
    id: number;
    userName: string;
    password: string;
    email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public userName!: string;
    public password!: string;
    public email!: string;

    // ADD FOREIGN KEY: LISTS

    // ADD AN INSTANCE METHOD FOR EMAIL & PASSWORD?
}

export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isAlphanumeric: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [8, 15],
                    // ADD MORE VALIDATION
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                }
            },
        },

        // ADD A HOOK FOR EMAIL & PASSWORD?

        {
            tableName: 'user',
            sequelize,
        }
    );

    return User;
}