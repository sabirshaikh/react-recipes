import { NavLink } from "react-router-dom";
import { authActions } from "../../Store";
import { useSelector, useDispatch } from "react-redux";

const MainNavigation = (props) => {
    const {toggleNavigation} = props;
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    return (
        <ul id="menu-main" className={`white-link dropdown-dark text-lg-center nav-menu ${props.classes}` } style={{display: toggleNavigation ? 'block' : 'none'}}>
            <li><NavLink activeClassName="active" exact to="/"> Home </NavLink></li>
            <li><NavLink  activeClassName="active" to="/recipes">Recipes</NavLink></li>
            { isAuthenticated && <li><NavLink  activeClassName="active" to="/myRecipes">My Recipes</NavLink></li>}
        </ul>
    )
}
export default MainNavigation;