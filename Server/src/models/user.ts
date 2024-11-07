import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';

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

    setEmailToLowerCase() {
        this.email.toLowerCase();
    }

    async setPassword(password: string): Promise<void> {
        this.password = await bcrypt.hash(password, 10);
    }
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
                // validate: {
                //     isAlphanumeric: true,
                // },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     notNull: {
                //         msg: 'Please enter a password',
                //     },
                // },
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
        {
            hooks: {
                beforeCreate: async (user: any) => {
                    // await newUserData.setEmailToLowerCase();
                    await user.setPassword(user.password);
                },
                // beforeUpdate: async (updatedUserData: any) => {
                //     await updatedUserData.setEmailToLowerCase();
                //     if (updatedUserData.password) {
                //         await updatedUserData.setPassword(updatedUserData.password);
                //     }
                // },
            },
            tableName: 'user',
            sequelize,
        }
    );

    return User;
}