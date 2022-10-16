import { createSlice, isRejected } from '@reduxjs/toolkit';
import { layoutActions, recipeActions } from './index';
import axios from 'axios';
const recipeState = {
    recipes: [],
    recipeCategory: [
        {name: 'Fish', image: '/img/cat-1.jpg'},
        {name: 'Cocktails', image: '/img/cat-2.jpg'},
        {name: 'Eggs', image: '/img/cat-3.jpg'},
        {name: 'Salad', image: '/img/cat-4.jpg'},
        {name: 'Asian', image: '/img/cat-5.jpg'},
        {name: 'Pizza', image: '/img/cat-6.jpg'}
    ],
    currentCategory: '',
    error: false,
    errorMessage: ''
}
const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: recipeState,
    reducers: {
        setRecipes(state, action) {
            if (action.payload.replace) {
                state.recipes = action.payload.data;
            } else {
                state.recipes = [...state.recipes, ...action.payload.data];
            }
        },

        removeRecipes(state, action) {
            state.recipes = []
        },

        setCategory(state, action) {
            state.currentCategory = action.payload;
        },

        setError(state, action) {
            state.error = action.payload.error;
            state.errorMessage = action.payload.errorMessage;
        }
    }
})

export const getRecipes = (categoryName, showMore, replace = false) => {
    return (dispatch) => {
            console.log("call recipe")
            dispatch(layoutActions.showLoader(true));
            let apiCall = `https://api.edamam.com/search?imageSize=THUMBNAIL&q='${categoryName}'&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39`;
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
                        dispatch(recipeActions.setError({
                            error: false,
                            errorMessage: ''
                        }));
                        dispatch(recipeActions.setRecipes({
                            data: res.data.hits,
                            replace
                        }))
                    }
                    dispatch(layoutActions.showLoader(false));
                })
                .catch((error)=> {
                    dispatch(layoutActions.showLoader(false));
                    dispatch(recipeActions.removeRecipes());
                    dispatch(recipeActions.setError({
                        error: true,
                        errorMessage: error.message
                    }));
                    console.log("error:", error);
                    // setError(error.message);
                }).finally(() => {
                    dispatch(layoutActions.showLoader(false));
                    // console.log("error:", error);
                })
            } catch (error) {
                dispatch(layoutActions.showLoader(false));
                dispatch(recipeActions.removeRecipes());
                console.log('error while fetching data...')
            } 
    }
}

export default recipeSlice;