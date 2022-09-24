import { createContext, useEffect } from "react";
import { useState } from "react";
import usePersistState from '../Hooks/usePersistState';
import browserStorage from 'store';

const PageContext = createContext({
    title: '',
    headerClass: '',
    isAuthenticated: false,
    headerAlignment: (alignClass) => {},
    setTitle: (title) => {},
    login: () => {},
    logout: () => {}
});

export const PageContextProvider = (props) => {

    const initState = browserStorage.get('userData');

    const [pageTitle, setPageTitle] = useState(initState.pageTitle || 'Home');
    const [headerLayout, setHeaderLayout] = useState(initState.headerLayout || 'text-left')
    const [loggedIn, setLoggedIn] = useState(initState.loggedIn || false);


    const [userData, setUserData] =  usePersistState('userData', {
        pageTitle,
        headerLayout,
        loggedIn
    })

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

    const contextValue = {
        title: pageTitle,
        headerClass: headerLayout,
        isAuthenticated: loggedIn,
        setTitle: setTitleHandler,
        headerAlignment: headerLayoutHandler,
        login: loginHandler,
        logout: logoutHandler
    };

   
    
    return (
    <PageContext.Provider value={contextValue}>
        {props.children}
    </PageContext.Provider>
    )
}

export default PageContext;