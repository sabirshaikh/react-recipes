import { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const MasterPageLayout = (props) => {
    return (
        <Fragment>
            <div className="banner padding-tb-20px background-overlay" style={{backgroundImage: `url(/img/banner_1.jpg)`}}>
                <div className="container">
                    {<Header />}
                    <div className="padding-tb-200px z-index-2 position-relative">
                        <h1 className="text-white pull-l icon-large font-weight-500 margin-bottom-40px">+20,000</h1>
                        <h3 className="text-white icon-large font-weight-100">Cooking Recipes</h3>
                        <div className="margin-top-45px">
                        <Link to="/recipes" className="btn btn-md border-1 border-radius-0 btn-inline-block text-white padding-lr-25px opacity-hover-7">Browse Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {props.children}    
            <Footer/>
        </Fragment>
    )
}

export default MasterPageLayout;