import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import InnerPageLayout from "../Layout/InnerPageLayout";
import PageContext from "../Store";
import { useHistory } from "react-router-dom";

const InnerPageRoute = ({component: Component, ...props}) => {
    console.log("protected:", props.isProtected);
    const history = useHistory();
    const ctx = useContext(PageContext);
    const {isAuthenticated} = ctx;
    const isProtected = props.isProtected;

    useEffect(() => {
        if(isProtected) {
            if(!isAuthenticated) {
                history.push("/singup");
            }
        }
    }, [isProtected, isAuthenticated]);
    
    return (
        <Route {...props} render={matchProps => (
            <InnerPageLayout>
               <Component {...matchProps}/>
            </InnerPageLayout>
        )} />
    )
}

export default InnerPageRoute;