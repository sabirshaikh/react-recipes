import { useEffect } from "react";
import { useHistory, NavLink, Route, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { layoutActions } from "../Store";
import EmailChange from "./EmailChange";
import PasswordChange from "./PasswordChange";
const Profile = () => {
	const authState = useSelector(state => state.authReducer);
	const isAuthenticated = authState.isAuthenticated;
	const history = useHistory();
	const dispatch = useDispatch();
	const {path, url} = useRouteMatch();

	useEffect(() => {
		dispatch(layoutActions.setTitle('User Profile'));
		dispatch(layoutActions.setHeaderAlignment('text-center'));
	}, [dispatch])

    useEffect(() => {
		if (!isAuthenticated) {
			history.push("/signin");
		}
    }, [isAuthenticated])


    return (
        <div className="container margin-bottom-100px">
			<ul className="nav nav-pills justify-content-center margin-bottom-20px">
				<li className="nav-item">
					<NavLink className="nav-link" activeClassName="active" to={`${url}/change-email`}>Change Email</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" activeClassName="active" to={`${url}/change-password`}>Change Password</NavLink>
				</li>
			</ul>
			<Route path={`${path}/change-email`}>
				<EmailChange/>
			</Route>
			<Route path={`${path}/change-password`}>
				<PasswordChange/>
			</Route>
		</div>
    )
}

export default Profile;