import { NavLink } from "react-router-dom";
const MainNavigation = (props) => {
    const {toggleNavigation} = props;
    const location = window.location.pathname;
    return (
        <ul id="menu-main" className={`white-link dropdown-dark text-lg-center nav-menu ${props.classes}` } style={{display: toggleNavigation ? 'block' : 'none'}}>
            <li  className={`has-dropdown ${location === "/" ? "active" : ""}`}><NavLink activeClassName="active" to="/"> Home </NavLink></li>
            <li className={`has-dropdown ${location === "/recipes" ? "active" : ""}`}><NavLink to="/recipes">Recipes</NavLink></li>
        </ul>
    )
}
export default MainNavigation;