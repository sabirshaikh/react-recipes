import { Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Recipes from '../pages/Recipes';
import RecipeDetails from '../pages/RecipeDetails';
import Signup from '../pages/Signup';
import Signin from '../pages/Singin';
import NotFound from '../pages/NotFound';
import InnerPageRoute from './InnerPageRoute';
import MasterPageRoute from './MasterPageRoute';
import AddRecipe from '../pages/AddRecipe';
const Routers = () => {
    return (
        <Switch>
            <MasterPageRoute path='/' exact component={HomePage}/>
            <InnerPageRoute path='/recipes' exact component={Recipes} />
            <InnerPageRoute path='/recipes/:id' component={Recipes} />
            <InnerPageRoute path='/recipeDetails/:id' component={RecipeDetails} />
            <InnerPageRoute path='/singup' component={Signup} />
            <InnerPageRoute path='/signin' component={Signin} />
            <InnerPageRoute path="/addrecipe" component={AddRecipe} isProtected/>
            <InnerPageRoute path="/*" component={NotFound} />
        </Switch>
    )
};

export default Routers;