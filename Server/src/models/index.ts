import sequelize from "../config/connection";
import { RecipeFactory } from './recipe';
import { RecipeListFactory } from './recipe-list';
import { UserFactory } from './user';

    const Recipe = RecipeFactory(sequelize);
    const List = RecipeListFactory(sequelize);
    const User = UserFactory(sequelize);

    User.hasMany(List, { foreignKey: 'assignedUserId'});
    List.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser'});
    List.hasMany(Recipe, { foreignKey: 'assignedRecipeId'});
    Recipe.belongsTo(List, { foreignKey: 'assignedRecipeId', as: 'assignedRecipe'});
    
export { User, List, Recipe };