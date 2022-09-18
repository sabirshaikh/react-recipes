import React, { Component } from "react";
import { Route } from "react-router-dom";
import InnerPageLayout from "../Layout/InnerPageLayout";
const InnerPageRoute = ({component: Component, ...props}) => {
    console.log('compoents:', props)
    const config = props.Component;
    return (
        <Route {...props} render={matchProps => (
            <InnerPageLayout>
               <Component {...matchProps}/>
            </InnerPageLayout>
        )} />
    )
}

export default InnerPageRoute;