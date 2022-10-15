import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import InnerPageLayout from "../Layout/InnerPageLayout";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const InnerPageRoute = ({component: Component, ...props}) => {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
	const history = useHistory();
	
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