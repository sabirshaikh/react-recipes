import { createContext, useEffect } from "react";
import { useState, useCallback } from "react";
import axios from "axios";
import usePersistState from '../Hooks/usePersistState';
import browserStorage from 'store';
import { useLocation } from "react-router-dom";
const recipeCategory = [
    {name: 'Fish', image: '/img/cat-1.jpg'},
    {name: 'Cocktails', image: '/img/cat-2.jpg'},
    {name: 'Eggs', image: '/img/cat-3.jpg'},
    {name: 'Salad', image: '/img/cat-4.jpg'},
    {name: 'Asian', image: '/img/cat-5.jpg'},
    {name: 'Pizza', image: '/img/cat-6.jpg'}
  ]

const PageContext = createContext({
    title: '',
    headerClass: '',
    isAuthenticated: false,
    headerAlignment: (alignClass) => {},
    setTitle: (title) => {},
    login: () => {},
    logout: () => {},
    recipeCategory,
    recipes: [],
    setRecipes: (recipes, replace = false) => {},
    showLoader: false,
    toggleLoader: () => {},
    setCategory: (categoryName) => {},
    currentCategory: ''
});

export const PageContextProvider = (props) => {
    const [pageTitle, setPageTitle] = useState('Home');
    const [headerLayout, setHeaderLayout] = useState('text-left')
    const [loggedIn, setLoggedIn] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [loader, setLoader] = useState(false);
    const [category, setCategory] = useState('');
    
    const [userData, setUserData] =  usePersistState('userData', {
        pageTitle,
        headerLayout,
        loggedIn
    })

    const initState = browserStorage.get('userData');
    useEffect(() => {
        console.log("set localstoreage:", initState)
        if(initState != null) {
            setPageTitle(initState.pageTitle);
            setHeaderLayout(initState.headerLayout);
            setLoggedIn(initState.loggedIn);
        }
    }, [])

    useEffect(() => {
        setUserData({
            pageTitle,
            headerLayout,
            loggedIn
        })
    }, [loggedIn, pageTitle, headerLayout]);

   

    
    const setTitleHandler = (title) => {
        setPageTitle(title);
    };

    const headerLayoutHandler = (data) => {
        setHeaderLayout(data);
    };

    const loginHandler = () => {
        setLoggedIn(true);
    }

    const logoutHandler = () => {
        setLoggedIn(false);
    }

    const categoryHandler = (data) => {
        setCategory(data);
    }

    const setRecipesHandler = (data, replace = false) => {
            replace ? setRecipes((oldRecipes) => [...data]) : setRecipes((oldRecipes) => [...oldRecipes, ...data]);
    }

    const toggleLoader = (data) => {
        setLoader(data);
    }
    

    const contextValue = {
        title: pageTitle,
        headerClass: headerLayout,
        isAuthenticated: loggedIn,
        setTitle: setTitleHandler,
        headerAlignment: headerLayoutHandler,
        login: loginHandler,
        logout: logoutHandler,
        setRecipes: setRecipesHandler,
        recipeCategory,
        recipes: recipes,
        showLoader: loader,
        toggleLoader,
        currentCategory: category,
        setCategory: categoryHandler
    };

   
    
    return (
    <PageContext.Provider value={contextValue}>
        {props.children}
    </PageContext.Provider>
    )
}

export default PageContext;