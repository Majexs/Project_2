import sequelize from "../config/connection";
import { RecipeFactory } from './recipe';
import { ListFactory } from './recipe-list';
import { UserFactory } from './user';

    const Recipe = RecipeFactory(sequelize);
    const List = ListFactory(sequelize);
    const User = UserFactory(sequelize);

    // FIX CONNECTIONS SECTION
        // ONDELETE: CASCADE
        // BELONGSTOMANY RELATIONSHIPS

    User.hasMany(List, { foreignKey: 'assignedUserId'});
    List.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser'});
    List.hasMany(Recipe, { foreignKey: 'assignedRecipeId'});
    Recipe.belongsTo(List, { foreignKey: 'assignedRecipeId', as: 'assignedRecipe'});
    
export { User, List, Recipe };