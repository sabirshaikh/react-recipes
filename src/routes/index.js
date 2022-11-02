import React, {Suspense, lazy} from 'react';
import { Switch } from 'react-router-dom';
import Loading from "react-fullscreen-loading";

const HomePage = lazy(() => import('../pages/HomePage'));
const Recipes = lazy(() => import('../pages/Recipes'));
const RecipeDetails = lazy(() => import('../pages/RecipeDetails'));
const Signup = lazy(() => import('../pages/Signup'));
const Signin = lazy(() => import('../pages/Singin'));
const NotFound = lazy(() => import('../pages/NotFound'));
const InnerPageRoute = lazy(() => import('./InnerPageRoute'));
const MasterPageRoute = lazy(() => import('./MasterPageRoute'));
const AddRecipe = lazy(() => import('../pages/AddRecipe'));
const Profile = lazy(() => import('../pages/Profile'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyRecipes = lazy(() => import('../pages/MyRecipes'));

const Routers = () => {
    return (
        <Suspense fallback={
            <Loading loading={true} background="#ffffffb3" loaderColor="#b1b1b1" />
        }>
            <Switch>
                <MasterPageRoute path='/' exact component={HomePage}/>
                <InnerPageRoute path='/recipes' component={Recipes} />
                <InnerPageRoute path='/recipes/:id' component={Recipes} />
                <InnerPageRoute path='/recipeDetails/:id' component={RecipeDetails} />
                <InnerPageRoute path='/singup' component={Signup} />
                <InnerPageRoute path='/signin' component={Signin} />
                <InnerPageRoute path='/profile' component={Profile} isProtected/>
                <InnerPageRoute path='/forgot-password' component={ForgotPassword} />
                <InnerPageRoute path="/addrecipe" component={AddRecipe} isProtected/>
                <InnerPageRoute path="/myRecipes" component={MyRecipes} isProtected/>
                <InnerPageRoute path="*" component={NotFound} />
            </Switch>
        </Suspense>
    )
};

export default Routers;