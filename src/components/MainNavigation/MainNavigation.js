import { NavLink } from "react-router-dom";
const MainNavigation = (props) => {
    const {toggleNavigation} = props;
    const location = window.location.pathname;
    return (
        <ul id="menu-main" className={`white-link dropdown-dark text-lg-center nav-menu ${props.classes}` } style={{display: toggleNavigation ? 'block' : 'none'}}>
            <li><NavLink activeClassName="active" exact to="/"> Home </NavLink></li>
            <li><NavLink  activeClassName="active" to="/recipes">Recipes</NavLink></li>
        </ul>
    )
}
export default MainNavigation;