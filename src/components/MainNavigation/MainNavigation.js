import { NavLink } from "react-router-dom";
const MainNavigation = (props) => {
    const {toggleNavigation} = props;
    return (
        <ul id="menu-main" className={`white-link dropdown-dark text-lg-center nav-menu ${props.classes}` } style={{display: toggleNavigation ? 'block' : 'none'}}>
            <li className="has-dropdown"><NavLink activeClassName="active" to="/"> Home </NavLink></li>
            <li className="has-dropdown"><NavLink to="/recipes">Recipes</NavLink></li>
        </ul>
    )
}
export default MainNavigation;