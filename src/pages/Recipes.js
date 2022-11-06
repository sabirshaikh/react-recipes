import { Fragment, useCallback, useState, useRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { layoutActions, recipeActions } from "../Store";
import RecipeCard1 from "../components/RecipeCard/RecipeCard1";
import axios from "axios";
import { Helmet } from "react-helmet";
import InputControl from "../components/UI/InputControl";
import useInput from "../Hooks/useInput";
const Category = () => {
    const history = useHistory();
    const params = useParams();
    const [from, setFrom] = useState(0);
    const [recipesBlock, setRecipesBlock] = useState([]);
    const categoryName = params.id ? params.id.trim() : 'indian';
    const [error, setError] = useState(false);
    const showLoader = useSelector(state => state.layoutReducer.showLoader);
    const recipes = useSelector(state => state.recipeReducer.recipes);
    const currentCategory = useSelector(state => state.recipeReducer.currentCategory);
    
    const {
        value: enteredSearchValue,
        hasError: searchHasError,
        valueChangedHandler: searchChangedHandler,
        inputBlurHandler: searchBlurHandler,
        isValid: enteredSearchValueIsValid,
        reset: resetSearchValue
    } = useInput(value => value.trim() !== '');
    const searchControlRef = useRef('');

    let formIsValid = false;
    if (enteredSearchValueIsValid ) {
        formIsValid = true
    }

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(layoutActions.setHeaderAlignment('text-left'));
    },[])

    useEffect(()=> {
        dispatch(layoutActions.setTitle(`${categoryName} Recipes | Cook Note`));

        if(currentCategory.toLowerCase() !== categoryName.toLowerCase() || recipes.length === 0) {
            dispatch(recipeActions.setCategory(categoryName.toLowerCase()))
            fetchRecipes(null, true);
        }
    }, [categoryName])

    useEffect(() => {
        if(from > 0) {
            fetchRecipes({
                from,
                to: from + 10
            })
        }
    }, [from]);

    useEffect(() => {
        const recipeBlock = recipes.map((data, i) => {
            return (
                <div  key={i} className="col-lg-6 margin-bottom-30px">
                    <RecipeCard1 
                        recipeName={data.recipe.label} 
                        recipeUrl={data.recipe.uri}
                        recipeImage={data.recipe.image}
                        recipeServing={data.recipe.yield} 
                        rating={ Math.floor(Math.random() * (5 - 1 + 1)) + 1} 
                    />
                </div>
            )
        })
        setRecipesBlock(recipeBlock);
    }, [recipes]);

    const fetchRecipes = useCallback((showMore, replace = false) => {
        dispatch(layoutActions.showLoader(true));
        let apiCall = `https://api.edamam.com/search?imageSize=THUMBNAIL&q='${categoryName}'&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39`;
        if(showMore) {
            const {from, to} = showMore;
            apiCall = `https://api.edamam.com/search?from=${from}&to=${to}&imageSize=THUMBNAIL&q='${categoryName}'&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39`;
        }

        try {
            axios.get(apiCall)
            .then((res)=> {
                if(res.status === 200) {
                    dispatch(recipeActions.setRecipes({
                        data: res.data.hits,
                        replace
                    }))
                }
                dispatch(layoutActions.showLoader(false));
                setError(false);
            })
            .catch((error)=> {
                dispatch(layoutActions.showLoader(false));
                setError(true);
            })
        } catch (error) {
            dispatch(layoutActions.showLoader(false));
        }
    });

    const showMoreRecipesHandler = () => {
        setFrom(count => count + 1)
    }

    const searchHandler = (e) => {
        e.preventDefault();
        searchControlRef.current.blur();
        if(!formIsValid) {
            console.log("form is invalidated")
            return;
        } 
        resetSearchValue();
        history.push(`/recipes/${searchControlRef.current.value}`)

    }

    return (
        <Fragment>
            <Helmet>
				<title>Cook Note - {categoryName} Food Recipes</title>
			</Helmet>
            <div className="container">
                <div className="margin-bottom-60px">
                    <div className="listing-search box-shadow">
                        <form className="row no-gutters" onSubmit={searchHandler}>
                            <div className="col-md-8">
                                <div className="keywords">
                                    {/* <input  /> */}
                                    <InputControl 
                                        ref={searchControlRef}
                                        className={`listing-form first ${searchHasError ? 'inValid' : ''}`}
                                        type="text" 
                                        value={enteredSearchValue}
                                        placeholder="Enter recipe name" 
                                        onChange={searchChangedHandler}
                                        onBlur={searchBlurHandler}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="submit" className="listing-bottom background-second-color box-shadow btn" disabled={!formIsValid}>Search Now</button>
                            </div>
                        </form>
                    </div>
                    {searchHasError  && <p className="text-main-color mt-3">Please enter value</p>}
                </div>
            </div>
            <div className="container margin-bottom-100px">
                {error && <p>Something went wrong!</p>}
                { recipesBlock.length === 0 && !showLoader && !error ? <p>{categoryName} Recipes Not Found, Please try again <Link to="/recipes" className="text-main-color">recipes</Link></p> : <div className="row">
                    {!error && recipesBlock}
                </div>
                }
                {   
                    !error && recipesBlock && <div className="text-center">
                        <button onClick={showMoreRecipesHandler} className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">Show More Recipes</button>
                    </div>
                }
            </div>
        </Fragment>
    )
}

export default Category;