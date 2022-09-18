import { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PageContext from "../Store";
const Signup = () => {
    const ctx = useContext(PageContext);
	const isAuthenticated = ctx.isAuthenticated;
	const history = useHistory();
	
    useEffect(() => {
        ctx.headerAlignment('text-center');
		if (isAuthenticated) {
			history.push("/");
		}
    }, [isAuthenticated])

	const loginHandler = (event) => {
		event.preventDefault();
		ctx.login();
	}
    return (
        <div className="container margin-bottom-100px">
	
		<div id="log-in" className="site-form log-in-form box-shadow border-radius-10">

			<div className="form-output">
				<form onSubmit={loginHandler}>
					<div className="form-group label-floating">
						<label className="control-label">Your Email</label>
						<input className="form-control" placeholder="" type="email" />
					</div>
					<div className="form-group label-floating">
						<label className="control-label">Your Password</label>
						<input className="form-control" placeholder="" type="password" />
					</div>

					<div className="remember">
						<div className="checkbox">
							<label><input name="optionsCheckboxes" type="checkbox" />Remember Me</label>
						</div>
						<a href="#" className="forgot">Forgot my Password</a>
					</div>

					<button type="submit" className="btn btn-md btn-primary full-width">Login</button>

					<div className="or"></div>

					<a href="#" className="btn btn-md bg-facebook full-width btn-icon-left"><i className="fab fa-facebook margin-right-8px" aria-hidden="true"></i> Login with Facebook</a>

					<a href="#" className="btn btn-md bg-twitter full-width btn-icon-left"><i className="fab fa-twitter margin-right-8px" aria-hidden="true"></i> Login with Twitter</a>


					<p>Don't you have an account? <a href="page-sign-up.html">Register Now!</a> </p>
				</form>
			</div>
		</div>
		

	</div>
    )
}

export default Signup;