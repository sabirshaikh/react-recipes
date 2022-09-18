import { Switch, Route } from 'react-router-dom';
import MaterPageLayout from './Layout/MaterPageLayout';
import InnerPageLayout from './Layout/InnerPageLayout';
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <MaterPageLayout>
            <HomePage />
          </MaterPageLayout> 
        </Route>
       
          <Route path='/recipes' exact>
            <InnerPageLayout>
              <Recipes/>
            </InnerPageLayout>
          </Route>
          <Route  path='/recipes/:id'>
            <InnerPageLayout>
              <RecipeDetails/>
            </InnerPageLayout>
          </Route>
          <Route  path='/singup'>
            <InnerPageLayout>
              <Signup/>
            </InnerPageLayout>
          </Route>
          <Route path="/*">
            <InnerPageLayout>
              <NotFound/>
            </InnerPageLayout>
          </Route>
       
      </Switch>
  );
}

export default App;
