import { useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import HeaderLink from "../MainNavigation/HeaderLink";
import useWindowSize from "../../Hooks/useWindowSize";
const Header = () => {
    const {width: windowWidth} = useWindowSize();
    const [showNavigation, setShowNavigation] = useState(true);
    const toggleNavigation = (event) => {    
        event.preventDefault();
        setShowNavigation(prevState => prevState = !showNavigation);
    }
    useEffect(() => {
      if(windowWidth <= 991) {
          setShowNavigation(false);
      } else {
          setShowNavigation(true);
      }
    }, [windowWidth])

    return (
        <header className="background-main-color">
            <div className="header-output">
              <div className="header-in">
            
                <div className="row">
                  <div className="col-lg-3 col-md-12 padding-left-30px">
                    <Link to="/" id="logo" href="index-2.html" className="d-inline-block margin-tb-10px"><img src={process.env.PUBLIC_URL + '/img/logo-1.png'} alt="" /></Link>
                    <a className="mobile-toggle padding-13px background-main-color" href="#" onClick={toggleNavigation}><i className="fas fa-bars"></i></a>
                  </div>
                  <div className="col-lg-5 col-md-12 position-inherit">
                    {<MainNavigation toggleNavigation={showNavigation} classes='link-padding-tb-24px' />}
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <hr className="margin-bottom-0px d-block d-sm-none" />
                    <HeaderLink />
                  </div>
                </div>

              </div>
            </div>
        </header>
    )
}

export default Header;