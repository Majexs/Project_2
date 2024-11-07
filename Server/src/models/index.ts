import sequelize from "../config/connection.js";
import { RecipeFactory } from './recipe.js';
import { ListFactory } from './recipe-list.js';
import { UserFactory } from './user.js';

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
    
export { User, 
    List, 
    Recipe 
};