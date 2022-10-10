import React from "react";
import { Route } from "react-router-dom";
import MasterPageLayout from "../Layout/MasterPageLayout";
const MasterPageRoute = ({component: Component, ...props}) => {
    return (
        <Route {...props} render={matchProps => (
            <MasterPageLayout>
               <Component {...matchProps}/>
            </MasterPageLayout>
        )} />
    )
}

export default MasterPageRoute;