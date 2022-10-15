import { Fragment} from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
const InnerPageLayout = (props) => {
    const headerClass = useSelector(state => state.layoutReducer.headerAlignment);
    const title = useSelector(state => state.layoutReducer.pageTitle);
   
    return (
        <Fragment>
            <Header/>
            <div id="page-title" className="padding-tb-30px gradient-white">
                <div className={`container ${headerClass}`}>
                    <Breadcrumb/>
                    <h1 className="font-weight-300 text-capitalize">{title}</h1>
                </div>
            </div>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default InnerPageLayout;