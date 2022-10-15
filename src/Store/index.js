import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const layoutState = {
    headerAlignment: 'text-left',
    pageTitle: 'Home',
    showLoader: false
}
const layoutSlice = createSlice({
    name: 'layoutSlice',
    initialState: layoutState,
    reducers: {
        setTitle(state, action) {
            state.pageTitle = action.payload
        },
        setHeaderAlignment(state, action) {
            state.headerAlignment = action.payload
        },
        showLoader(state, action) {
            state.showLoader = action.payload
        }
    }
})

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
    currentCategory: 'indian'
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


const store = configureStore({
    reducer: {
        authReducer: authSlice.reducer,
        layoutReducer: layoutSlice.reducer,
        recipeReducer: recipeSlice.reducer
    }
})

export const authActions = authSlice.actions;
export const layoutActions = layoutSlice.actions;
export const recipeActions = recipeSlice.actions;

export default store;