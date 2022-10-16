import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions, layoutActions } from "../Store";
import { asynLogin } from "../Store/authSlice";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Signup = () => {
	const MySwal = withReactContent(Swal)
	const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
	const history = useHistory();
	const dispatch = useDispatch();
	const emailRef = useRef();
	const passwordRef = useRef();
	
	useEffect(() => {
		dispatch(layoutActions.setTitle('Login'));
		dispatch(layoutActions.setHeaderAlignment('text-center'));
	}, [])

    useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}
    }, [isAuthenticated])

	async function sendRequest() {
		let errorMsg = 'Something went wrong!'
		try {
			dispatch(layoutActions.showLoader(true));
		  let url;
		  if(isAuthenticated) {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRohny3ltD8ORRdQxLQfLCtyHgWRJjk9I';
		  } else {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRohny3ltD8ORRdQxLQfLCtyHgWRJjk9I'
		  }
	
		  const response = await fetch(url,{
			  method: 'POST',
			  body: JSON.stringify({
				email: emailRef.current.value,
				password: passwordRef.current.value,
				returnSecureToken: true
			  }),
			  headers: {
				'Content-Type': 'application/json'
			  }
			})
	
			const responseData = await response.json();
			if(!response.ok) {
			  console.log("error:", responseData.error.message)
			  throw new Error(responseData.error.message);
			}
	
			if(response.status === 200) {
			  alert("success:");
			//   const expireTime = new Date(new Date().getTime() + (10 * 1000))
			//   authCtx.login(responseData.idToken, expireTime.toISOString() );
			//   authCtx.userData(responseData);
			//   history.replace("/");
			  console.log("localId:", responseData.expiresIn)
			}
			dispatch(layoutActions.showLoader(false));
		} catch (error) {
			dispatch(layoutActions.showLoader(false));
			if(error.message === 'INVALID_EMAIL') {
				errorMsg = "Entered Email is not valid"
			}
			if(error.message === 'INVALID_PASSWORD') { 
				errorMsg = "Entered Password is not valid"
			}
			
			console.log("sabir error:", error.message)
			
		//   alert(error);
		  	MySwal.fire({
				icon: 'error',
				title: 'Invalid User',
				text: errorMsg
			})
		 
		}
	   
	}

	const loginHandler = (event) => {
		event.preventDefault();
		console.log("email:", emailRef.current.value);
		console.log("password:", passwordRef.current.value);
		sendRequest();
		//dispatch(asynLogin());
	}

    return (
        <div className="container margin-bottom-100px">
	
		<div id="log-in" className="site-form log-in-form box-shadow border-radius-10">

			<div className="form-output">
				<form onSubmit={loginHandler}>
					<div className="form-group label-floating">
						<label className="control-label">Your Email</label>
						<input className="form-control" placeholder="Enter Email" type="email" ref={emailRef}/>
					</div>
					<div className="form-group label-floating">
						<label className="control-label">Your Password</label>
						<input className="form-control" placeholder="Enter Pasword" type="password" ref={passwordRef} />
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