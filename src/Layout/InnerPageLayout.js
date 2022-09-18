import react, { Fragment, useEffect, useState } from "react";
import Header from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import PageContext from "../Store";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
const InnerPageLayout = (props) => {
    const ctx = useContext(PageContext);
    const {title} = ctx;
    const {headerClass} = ctx;
    useEffect(() => {
        console.log("change pageTitle:", title);
        // setPageTitle(title);
    }, [title])
    return (
        <Fragment>
            <Header/>
            <div id="page-title" className="padding-tb-30px gradient-white">
                <div className={`container ${ctx.headerClass}`}>
                    <Breadcrumb/>
                    <h1 className="font-weight-300">{title}</h1>
                </div>
            </div>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default InnerPageLayout;