import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const MainNavigation = (props) => {
    const {toggleNavigation} = props;
    return (
        <ul id="menu-main" className={`white-link dropdown-dark text-lg-center nav-menu ${props.classes}` } style={{display: toggleNavigation ? 'block' : 'none'}}>
            <li className="has-dropdown"><NavLink activeClassName="active" to="/"> Home </NavLink></li>
            <li className="has-dropdown"><NavLink to="/recipes">Recipes</NavLink></li>
            <li className="has-dropdown"><a href="#">Blog</a>
            <ul className="sub-menu text-left">
                <li><a href="blog-grid.html">Blog Grid </a></li>
                <li><a href="blog-list.html">Blog List</a></li>
                <li><a href="blog-classic.html">Blog Classic</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
            </ul>
            </li>
            <li className="has-dropdown"><a href="#">Pages</a>
            <ul className="sub-menu text-left">
                <li><a href="page-about.html">About Us </a></li>
                <li><a href="add-recipe.html">Add Recipe</a></li>
                <li><a href="page-login.html">Login Page</a></li>
                <li><a href="page-sign-up.html">Sign up</a></li>
                <li><a href="search-page.html">Search  Page</a></li>
                <li><a href="page-contact-us.html">Contact Us</a></li>
                <li><a href="page-404.html">Pages 404</a></li>
            </ul>
            </li>
            <li><a href="page-contact-us.html">Conact Us</a></li>
        </ul>
    )
}
export default MainNavigation;