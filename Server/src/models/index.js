import sequelize from "../config/connection";
import { RecipeFactory } from './recipe';
import { ListFactory } from './recipe-list';
import { UserFactory } from './user';
const Recipe = RecipeFactory(sequelize);
const List = ListFactory(sequelize);
const User = UserFactory(sequelize);
// User can have multiple Recipe Lists
User.hasMany(List, {
    onDelete: 'CASCADE',
});
// Each Recipe List can only belong to one User
List.belongsTo(User);
// Each Recipe List can have multiple Recipes
List.hasMany(Recipe);
export { sequelize, User, List, Recipe };
