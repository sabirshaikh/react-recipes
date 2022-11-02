import {useEffect, useCallback, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import CategoryCard from "../components/RecipeCategoryCard/CategoryCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {layoutActions } from "../Store";
const RecipeDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [recipeData, setRecipeData] = useState(null);
    const recipeCategory = useSelector(state => state.recipeReducer.recipeCategory)
    const history = useHistory();
    useEffect(() => {
		dispatch(layoutActions.setHeaderAlignment('text-left'));
    }, []);

    useEffect(() => {
        if(recipeData) {
           dispatch(layoutActions.setTitle(recipeData.label));
        }
    }, [recipeData]);

    useEffect(() => {
        fetchRecipeDetails(params.id);
    }, [params.id]);

    const fetchRecipeDetails = useCallback(() => {
        dispatch(layoutActions.showLoader(true));
        let apiCall = `https://api.edamam.com/search?r=${params.id}&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39&imageSize=LARGE`;
        try {
            axios.get(apiCall)
            .then((res)=> {
                if(res.status === 200) {
                    if(res.data.length === 0){
                        history.replace("/404")
                    }
                    setRecipeData(res.data[0]);
                }
                dispatch(layoutActions.showLoader(false));
            })
            .catch((error)=> {
                console.log("error:", error);
            })
        } catch (error) {
            console.log('error while fetching data...')
        }
    });


    const Category = recipeCategory.map((data, index)=> {
        return (
          <div className="col-6 margin-bottom-25px" key={'cat' + index}>
            <CategoryCard key={'catCard' + index} categoryName={data.name}  image={data.image}/>
          </div>
        )
    })

    let nutrientsList = [];
    if (recipeData) {
        Object.entries(recipeData.totalNutrients).forEach(([key, value]) => {
            nutrientsList.push(<li key={key + 'list'}><span className="text-main-color">{value.label}</span>: {Math.ceil(value.quantity)} ({value.unit})</li>);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {recipeData &&
                    <div className="margin-bottom-40px card border-0 box-shadow">
                        <div className="card-img-top"><a href={recipeData.url} target="_blank"><img src={recipeData.image} alt="" target="_blank" className="w-100" /></a></div>
                        <div className="padding-lr-30px padding-tb-20px">
                            <h5 className="margin-bottom-20px margin-top-10px"><a className="text-dark" href="#">{recipeData.label}</a></h5>
                            <div className="rating">
                                <ul>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li></li>
                                </ul>
                            </div>
                            <hr />
                            <h3>Cuisine Type</h3>
                            <ul>
                                <li>{(recipeData.cuisineType)}</li>
                            </ul>
                            <hr/>
                            <h3>Meal Type</h3>
                            <ul>
                                <li>{(recipeData.mealType)}</li>
                            </ul>
                            <hr/>
                            <h3>Diet Type</h3>
                            <ul>
                                <li>{(recipeData.dietLabels)}</li>
                            </ul>
                            <hr/>
                            <h3>Ingredients</h3>
                            <ul>
                                {recipeData.ingredientLines.map((data, index) => {
                                    return <li key={'ingredient-' + index}>{data}</li>
                                })}
                            </ul>
                            <h3>Method</h3>
                            <ol>
                                <br/>
                                {recipeData.ingredients.map((data, index) => {
                                    return (
                                        <li key={index + '-ingredient'} className="mb-3">
                                            <ul>
                                                <li> <b>{data.text}</b></li>
                                                <li><span className="text-main-color">Quantity:</span> {data.quantity}</li>
                                                <li><span className="text-main-color">Measure</span> {data.measure}</li>
                                                <li><span className="text-main-color">Food:</span> {data.food}</li>
                                                <li><span className="text-main-color">Weight:</span> {data.weight}</li>
                                                <li><span className="text-main-color">foodCategory:</span> {data.foodCategory}</li>
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ol>
                            <hr />
                            <h3>Total Weight</h3>
                            <ul>
                                <li>{Math.ceil(recipeData.totalWeight)} (g)</li>
                            </ul>
                            <hr />
                            <h3>Total Calories</h3>
                            <ul>
                                <li>{Math.ceil(recipeData.calories)} (Kcal)</li>
                            </ul>
                            <hr/>
                            <h3>Total Nutrients</h3>
                            <ol>
                                {nutrientsList}
                            </ol>
                            <div className="row no-gutters">
                                <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> {recipeData.yield} servings</a></div>
                            </div>
                        </div>
                        <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                            <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-8.jpg" className="height-30px border-radius-30 margin-right-15px" alt="" /> Salim Aldos/ ery</a>
                        </div>
                    </div>
                    }
                    {
                        !recipeData && <p>Loading....</p>
                    }
                </div>

                <div className="col-lg-4">
                    <div className="listing-search box-shadow background-main-color padding-30px margin-bottom-30px">
                        <form className="row no-gutters">
                            <div className="col-md-12">
                                <div className="keywords">
                                    <input className="listing-form first border-radius-10 margin-bottom-10px" type="text" placeholder="Keywords..." value="" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="categories dropdown">
                                    <a className="listing-form d-block text-nowrap border-radius-10 margin-bottom-10px" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</a>
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
                            <div className="col-md-12">
                                <a className="listing-bottom border-radius-10 background-second-color box-shadow" href="#">Search Now</a>
                            </div>
                        </form>
                    </div>

                    <div className="row margin-tb-45px">
                        {Category}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecipeDetails;