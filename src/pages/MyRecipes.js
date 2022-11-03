import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { layoutActions, authActions } from "../Store";
import RecipeCard2 from "../components/RecipeCard/RecipeCard2";

const MyRecipes = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.authReducer.userInfo?.userId);
    const [myRecipes, setMyRecipes] = useState([]);

    if(!userId) {
       dispatch(authActions.logout());
    }

    const fetchRecipes = useCallback(() => {
        dispatch(layoutActions.showLoader(true));
        let apiCall = `https://react-movie-52e51-default-rtdb.firebaseio.com/recipes/${userId}.json`;

        try {
            axios.get(apiCall)
            .then((res)=> { 
                if(res.status === 200) {
                    setMyRecipes(res.data);
                }
                dispatch(layoutActions.showLoader(false));
            })
            .catch((error)=> {
                dispatch(layoutActions.showLoader(false));
                setMyRecipes([])
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong'
                })
            }).finally(() => {
                dispatch(layoutActions.showLoader(false));
            })
        } catch (error) {
            dispatch(layoutActions.showLoader(false));
            setMyRecipes([])
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong'
            })
        }
    });

    useEffect(() => {
        dispatch(layoutActions.setTitle('My Recipe'));
        dispatch(layoutActions.setHeaderAlignment('text-left'));
        fetchRecipes()
    }, [])


    return (
        <div className="container">
            <Helmet>
				<title>Cook Note - Food Recipes</title>
			</Helmet>
            <div className="recipes-masonry">
            {!myRecipes && <p>Recipes not found</p>}
                {
                    myRecipes && Object.entries(myRecipes).map((key, index) => {
                        return (
                            <div key={key[0]} className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
                                <RecipeCard2 
                                    recipeName={key[1]['recipeTitle']}
                                    recipeUrl={`myRecipeDetails/${key[0]}`}
                                    recipeImage={`/img/cat-2.jpg`}
                                    recipeServing={key[1]['recipeServings']} 
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyRecipes;