import { createSlice } from '@reduxjs/toolkit';
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
    currentCategory: ''
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
        setCategory(state, action) {
            state.currentCategory = action.payload;
        }
    }
})

export default recipeSlice;