import {Fragment} from 'react'
import { NavLink } from "react-router-dom";
import { authActions } from "../../Store";
import { useSelector, useDispatch } from "react-redux";

const HeaderLink = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    
    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.logout());
    }
    return (
        <Fragment>
            {isAuthenticated && <NavLink onClick={logoutHandler} activeClassName="active" to="/signin" className="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="fas fa-sign-out-alt"></i></NavLink>}
            {isAuthenticated && <NavLink activeClassName="active" to="/signin" className="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="far fa-user "></i></NavLink>}
            {isAuthenticated && <NavLink activeClassName="active" to="/addrecipe" className="text-white ba-2 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="fas fa-plus"></i></NavLink>}
            {!isAuthenticated && <NavLink activeClassName="active" to="/signin" className="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-23px text-extra-large"><i className="far fa-user "></i></NavLink>}
        </Fragment>
    )
}

export default HeaderLink;

