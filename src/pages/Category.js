import { Fragment, useCallback, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";
import PageContext from "../Store";
import RecipeCard1 from "../components/RecipeCard/RecipeCard1";
import axios from "axios";


const Category = () => {
    console.log("Recipe page call")
    const history = useHistory();
    const ctx = useContext(PageContext);
    const params = useParams();
    const ctxRecipes = ctx.recipes;
    const [from, setFrom] = useState(0);
    const [recipesBlock, setRecipesBlock] = useState(null);
    const categoryName = params.id;
    const [error, setError] = useState(null);

    useEffect(()=> {
        if(!categoryName) {
            history.replace("/404");
        }
        console.log("loaded recipes:", ctx.recipes)
        ctx.headerAlignment('text-left');
        ctx.setTitle(`${categoryName} Recipes | Cook Note`);
    },[])

    useEffect(()=> {
        fetchRecipes(null, true);
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
        console.log("call block to render:", ctxRecipes);
        const recipeBlock = ctxRecipes.map((data, i) => {
            return (
                <div  key={i} className="col-lg-6 margin-bottom-30px">
                    <RecipeCard1 
                        recipeName={data.recipe.label} 
                        recipeUrl={data.recipe.uri}
                        recipeImage={data.recipe.image}
                        recipeServing={data.recipe.yield} 
                        rating={ Math.floor(Math.random() * (5 - 1 + 1)) + 1} 
                    />
                    {/* <RecipeCard1  key={'r' + i}  recipeName={`recipe${i}`} rating={5} /> */}
                </div>
            )
        })
        setRecipesBlock(recipeBlock);
    }, [ctxRecipes]);

    const fetchRecipes = useCallback((showMore, replace = false) => {
        ctx.toggleLoader(true);
        let apiCall = `https://api.edamam.com/search?imageSize=THUMBNAIL&q='${categoryName}'&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39`;
        // let apiCall = `https://jsonplaceholder.typicode.com/posts`;
        if(showMore) {
            const {from, to} = showMore;
            console.log('call more:', from, to);
            apiCall = `https://api.edamam.com/search?from=${from}&to=${to}&imageSize=THUMBNAIL&q='${categoryName}'&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39`;
        }

        try {
            axios.get(apiCall)
            .then((res)=> {
                if(res.status === 200) {
                    console.log(res.data);
                    ctx.setRecipes(res.data.hits, replace);
                }
                ctx.toggleLoader(false);
            })
            .catch((error)=> {
                ctx.toggleLoader(false);
                console.log("error:", error);
                setError(error.message);
            })
        } catch (error) {
            ctx.toggleLoader(false);
            console.log('error while fetching data...')
        }
    });

    const showMoreRecipesHandler = () => {
        setFrom(count => count + 1)
    }

    return (
        <Fragment>
            <Link to="/category/arab">Arab</Link>
            <div className="container">
                <div className="margin-bottom-60px">
                    <div className="listing-search box-shadow">
                        <form className="row no-gutters">
                            <div className="col-md-4">
                                <div className="keywords">
                                    <input className="listing-form first" type="text" placeholder="Keywords..." value="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="categories dropdown">
                                    <a className="listing-form d-block text-nowrap" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item text-up-small" type="button">Fish</button>
                                        <button className="dropdown-item text-up-small" type="button">Cocktails</button>
                                        <button className="dropdown-item text-up-small" type="button">Salads</button>
                                        <button className="dropdown-item text-up-small" type="button">Asian</button>
                                        <button className="dropdown-item text-up-small" type="button">Fish</button>
                                        <button className="dropdown-item text-up-small" type="button">Cocktails</button>
                                        <button className="dropdown-item text-up-small" type="button">Salads</button>
                                        <button className="dropdown-item text-up-small" type="button">Asian</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <a className="listing-bottom background-second-color box-shadow" href="#">Search Now</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container margin-bottom-100px">
                {error && <p>Something went wrong!</p>}
                { !recipesBlock ? <p>Not Found, Please try again <Link to="/recipes" className="text-main-color">recipes</Link></p> : <div className="row">
                    {recipesBlock}
                </div>
                }
                {   
                   recipesBlock && <div className="text-center">
                        <button onClick={showMoreRecipesHandler} className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">Show More Recipes</button>
                    </div>
                }
            </div>
        </Fragment>
    )
}

export default Category;