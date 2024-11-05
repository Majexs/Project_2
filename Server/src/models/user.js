import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
export class User extends Model {
    setEmailToLowerCase() {
        this.email.toLowerCase();
    }
    async setPassword(newPassword) {
        this.password = await bcrypt.hash(newPassword, 10);
    }
    async checkPassword(loginPw) {
        const result = await bcrypt.compare(loginPw, this.password);
        return result;
    }
}
export function UserFactory(sequelize) {
    User.init({
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
    }, {
        hooks: {
            beforeCreate: async (newUserData) => {
                await newUserData.setEmailToLowerCase();
                await newUserData.setPassword(newUserData.password);
            },
            beforeUpdate: async (updatedUserData) => {
                await updatedUserData.setEmailToLowerCase();
                if (updatedUserData.password) {
                    await updatedUserData.setPassword(updatedUserData.password);
                }
            },
        },
        tableName: 'user',
        sequelize,
    });
    return User;
}
