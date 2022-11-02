import {useEffect, useCallback, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from "react-redux";
import {layoutActions, authActions } from "../Store";
const MyRecipeDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [recipeData, setRecipeData] = useState(null);
    const recipeCategory = useSelector(state => state.recipeReducer.recipeCategory)
    const history = useHistory();
    const userId = useSelector(state => state.authReducer.userInfo?.userId);

    if(!userId) {
        dispatch(authActions.logout());
    }

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

    const fetchRecipeDetails = useCallback((id) => {
        dispatch(layoutActions.showLoader(true));
        let apiCall = `https://react-movie-52e51-default-rtdb.firebaseio.com/recipes/${userId}/${id}.json`;
        try {
            axios.get(apiCall)
            .then((res)=> {
                if(res.status === 200) {
                    if(res.data.length === 0){
                        history.replace("/404")
                    }
                    setRecipeData(res.data);
                }
                dispatch(layoutActions.showLoader(false));
            })
            .catch((error)=> {
                dispatch(layoutActions.showLoader(false));
                console.log("error:", error);
            }).finally(() => {
                dispatch(layoutActions.showLoader(false));
            })
        } catch (error) {
            dispatch(layoutActions.showLoader(false));
            console.log('error while fetching data...')
        }
    });

    let nutrientsList = [];
    if (recipeData) {
        Object.entries(recipeData.nutrient).forEach(([key, value]) => {
            nutrientsList.push(<li key={key + 'list'}><span className="text-main-color">{value['value']}</span></li>);
        });
    }

    let ingredientList = [];
    if (recipeData) {
        Object.entries(recipeData.ingredient).forEach(([key, value]) => {
            ingredientList.push(<li key={key + 'list'}><span className="text-main-color">{value['value']}</span></li>);
        });
    }

    let stepList = [];
    if (recipeData) {
        Object.entries(recipeData.step).forEach(([key, value]) => {
            stepList.push(<li key={key + 'list'}><span className="text-main-color">{value['value']}</span></li>);
        });
    }

    const deleteHandler = useCallback(() => {
        dispatch(layoutActions.showLoader(true));
        let apiCall = `https://react-movie-52e51-default-rtdb.firebaseio.com/recipes/${userId}/${params.id}.json`;
        try {
            axios.delete(apiCall)
            .then((res)=> {
                if(res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Recipe Deleted',
                        text: 'Recipe Successfully deleted',
                        timer: 1500
                    }).then(() => {
                        history.replace('/myRecipes')
                    })
                }
                dispatch(layoutActions.showLoader(false));
            })
            .catch((error)=> {
                dispatch(layoutActions.showLoader(false));
                console.log("error:", error);
            }).finally(() => {
                dispatch(layoutActions.showLoader(false));
            })
        } catch (error) {
            dispatch(layoutActions.showLoader(false));
            console.log('error while fetching data...')
        }
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {recipeData && <button onClick={deleteHandler} className="btn btn-sm border-1 btn-danger text-white box-shadow">Delete Recipe</button>}
                    {recipeData &&
                    <div className="margin-bottom-40px card border-0 box-shadow">
                        <div className="card-img-top"><img src={`/img/cat-2.jpg`} alt="" target="_blank" className="w-100" /></div>
                        <div className="padding-lr-30px padding-tb-20px">
                            <h5 className="margin-bottom-20px margin-top-10px"><a className="text-dark" href="#">{recipeData.recipeTitle}</a></h5>
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
                                <li>{(recipeData.recipeCuisine)}</li>
                            </ul>
                            <hr/>
                            <h3>Meal Type</h3>
                            <ul>
                                <li>{(recipeData.recipeMeal)}</li>
                            </ul>
                            <hr/>
                            <h3>Diet Type</h3>
                            <ul>
                                <li>{(recipeData.recipeDiet)}</li>
                            </ul>
                            <hr/>
                            <h3>Ingredients</h3>
                            <ul>
                                {ingredientList}
                            </ul>
                            <h3>Method</h3>
                            <ol>
                                <br/>
                               {stepList}
                            </ol>
                            <hr />
                            <h3>Total Weight</h3>
                            <ul>
                                <li>{Math.ceil(recipeData.recipeWeight)} (g)</li>
                            </ul>
                            <hr />
                            <h3>Total Calories</h3>
                            <ul>
                                <li>{Math.ceil(recipeData.recipeCalories)} (Kcal)</li>
                            </ul>
                            <hr/>
                            <h3>Total Nutrients</h3>
                            <ol>
                                {nutrientsList}
                            </ol>
                            <div className="row no-gutters">
                                <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> {recipeData.recipeServings} servings</a></div>
                            </div>
                        </div>
                        <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                            <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-8.jpg" className="height-30px border-radius-30 margin-right-15px" alt="" /> Salim Aldos/ ery</a>
                        </div>
                    </div>
                    }
                    {
                        !recipeData && <p>Recipe not found</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default MyRecipeDetails;