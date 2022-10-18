import { Fragment, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { layoutActions, recipeActions } from "../Store";
import RecipeCard2 from "../components/RecipeCard/RecipeCard2";
import CategoryCard from "../components/RecipeCategoryCard/CategoryCard";
const HomePage = () => {
  const recipeCategory = useSelector(state => state.recipeReducer.recipeCategory)
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipeReducer.recipes);

  useEffect(()=> {
    if(recipes.length == 0) {
        dispatch(recipeActions.setCategory('indian'))
        fetchRecipes();
    }
  }, [])

  const fetchRecipes = useCallback(() => {
    dispatch(layoutActions.showLoader(true));
    let apiCall = `https://api.edamam.com/search?imageSize=THUMBNAIL&q=''&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39`;

    try {
        axios.get(apiCall)
        .then((res)=> {
            if(res.status === 200) {
                console.log(res.data);
                dispatch(recipeActions.setRecipes({
                    data: res.data.hits
                }))
            }
            dispatch(layoutActions.showLoader(false));
        })
        .catch((error)=> {
            dispatch(layoutActions.showLoader(false));
            console.log("error:", error);
        })
    } catch (error) {
        dispatch(layoutActions.showLoader(false));
        console.log('error while fetching data...')
    }
  });

  const RecipeBlock = () => {
      var data = [];
      for(let i=0; i < 4; i++) {
        console.log(`recipes${i} :${recipes[i].recipe.label}`)
          data.push(
          <div  key={'recipe' + i} className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
            <RecipeCard2 
              key={'recipeCard' + i} 
              recipeName={recipes[i].recipe.label} 
              recipeUrl={recipes[i].recipe.uri}
              recipeImage={recipes[i].recipe.image}
              recipeServing={recipes[i].recipe.yield} 
              rating={ Math.floor(Math.random() * (5 - 1 + 1)) + 1} 
            />
          </div>)
      }
      return data;
  }

  const Category = recipeCategory.map((data, index)=> {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px" key={'cat' + index}>
        <CategoryCard key={'catCard' + index} categoryName={data.name}  image={data.image}/>
      </div>
    )
  })
  return (
    <Fragment>
      <div className="pull-top-85px">
        <div className="container">
          <div className="row">
            {Category}
          </div>
        </div>
      </div>

      <section className="padding-tb-100px">
        <div className="container">
          <div className="title text-center">
            <h2 className="font-weight-700 text-main-color">Latest Recipes</h2>
            <div className="row justify-content-center margin-bottom-45px">
              <div className="col-md-7">
                <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
          </div>

          <div className="recipes-masonry">
            <RecipeBlock />
          </div>
          <div className="text-center">
            <Link to="/recipes" className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-third-color text-white">Show All Recipes</Link>
          </div>
        </div>
       
	    </section>
    </Fragment>
  )
};

export default HomePage;
