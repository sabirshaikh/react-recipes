import { createContext } from "react";
import { useState } from "react";
const PageContext = createContext({
    title: '',
    headerClass: '',
    headerAlignment: (alignClass) => {},
    setTitle: (title) => {}
});

export const PageContextProvider = (props) => {
    const [pageTitle, setPageTitle] = useState('Home');
    const [headerLayout, setHeaderLayout] = useState('text-left')
    const setTitleHandler = (title) => {
        setPageTitle(title);
    };

    const headerLayoutHandler = (data) => {
        setHeaderLayout(data);
    };

    const contextValue = {
        title: pageTitle,
        headerClass: headerLayout,
        setTitle: setTitleHandler,
        headerAlignment: headerLayoutHandler
    };

   
    
    return (
    <PageContext.Provider value={contextValue}>
        {props.children}
    </PageContext.Provider>
    )
}

export default PageContext;