import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import PageContext from "../../Store";
const Header = () => {
    const [showNavigation, setShowNavigation] = useState(true);
    const ctx = useContext(PageContext);
    const {isAuthenticated} = ctx;

    const toggleNavigation = (event) => {    
        event.preventDefault();
        setShowNavigation(prevState => prevState = !showNavigation);
    }

    const checkWindowSize = () => {
        if(window.innerWidth <= 991) {
            setShowNavigation(false);
        } else {
            setShowNavigation(true);
        }
    }

    const logoutHandler = (event) => {
      event.preventDefault();
      ctx.logout();
    }

    useEffect(() => {
        if(window.innerWidth <= 991) {
            setShowNavigation(false);
            window.addEventListener('resize', checkWindowSize);
        }
    }, [])

    return (
      
        <header className="background-main-color">
            <div className="header-output">
              <div className="header-in">
            
                <div className="row">
                  <div className="col-lg-3 col-md-12 padding-left-30px">
                    <Link to="/" id="logo" href="index-2.html" className="d-inline-block margin-tb-10px"><img src={process.env.PUBLIC_URL + '/img/logo-1.png'} alt="" /></Link>
                    <a className="mobile-toggle padding-13px background-main-color" href="#" onClick={toggleNavigation}><i className="fas fa-bars"></i></a>
                  </div>
                  <div className="col-lg-7 col-md-12 position-inherit">
                    {<MainNavigation toggleNavigation={showNavigation} classes='link-padding-tb-24px' />}
                  </div>
                  <div className="col-lg-2 col-md-12">
                    <hr className="margin-bottom-0px d-block d-sm-none" />
                    {/* <Link to="/singup" className="text-white ba-2 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="fas fa-plus"></i></Link>
                    <Link to="/singup" className="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="far fa-user"></i></Link> */}
                    {isAuthenticated && <NavLink activeClassName="active" to="/addrecipe" className="text-white ba-2 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="fas fa-plus"></i></NavLink>}
                    {!isAuthenticated && <NavLink activeClassName="active" to="/singup" className="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="far fa-user "></i></NavLink>}
                    {isAuthenticated && <NavLink onClick={logoutHandler} activeClassName="active" to="/singup" className="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="fas fa-sign-out-alt"></i></NavLink>}
                  </div>
                </div>

              </div>
            </div>
        </header>
    )
}

export default Header;