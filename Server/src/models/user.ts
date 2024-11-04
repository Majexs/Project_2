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

    async setPassword(newPassword: string): Promise<void> {
        this.password = await bcrypt.hash(newPassword, 10);
    }
    
    async checkPassword(loginPw: string): Promise<boolean> {
        const result = await bcrypt.compare(loginPw, this.password);
        return result;
    }

    // ADD FOREIGN KEY: LISTS

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
                    notNull: {
                        msg: 'Please enter a password',
                    },
                    len: {
                        args: [8, 20],
                        msg: 'Your password must be between 8 and 20 characters',
                    },
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
        {
            hooks: {
                beforeCreate: async (newUserData: any) => {
                    await newUserData.setEmailToLowerCase();
                    await newUserData.setPassword(newUserData.password);
                },
                beforeUpdate: async (updatedUserData: any) => {
                    await updatedUserData.setEmailToLowerCase();
                    if (updatedUserData.password) {
                        await updatedUserData.setPassword(updatedUserData.password);
                    }
                },
            },
            tableName: 'user',
            sequelize,
        }
    );

    return User;
}