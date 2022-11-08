import { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions, layoutActions } from "../Store";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import InputControl from "../components/UI/InputControl";
import { setLogoutTimer } from "../Store/authSlice";
const Signin = () => {
	const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
	const history = useHistory();
	const dispatch = useDispatch();
	const emailRef = useRef();
	const passwordRef = useRef();
	const { register, handleSubmit, formState: { errors, isValid }} = useForm({
		mode: 'all',
		shouldUnregister: true,
  		reValidateMode: 'onChange',
	});

	useEffect(() => {
		dispatch(layoutActions.setTitle('Sign In'));
		dispatch(layoutActions.setHeaderAlignment('text-center'));
	}, [])

	
    useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}
    }, [isAuthenticated])

	async function sendRequest(data) {
		let errorMsg = 'couldn\'t sign in';
		try {
			dispatch(layoutActions.showLoader(true));
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRohny3ltD8ORRdQxLQfLCtyHgWRJjk9I';
		  	const response = await fetch(url,{
				method: 'POST',
				body: JSON.stringify({
					email: data.email,
					password: data.password,
					returnSecureToken: true
				}),
				headers: {
				'Content-Type': 'application/json'
				}
			})
	
			const responseData = await response.json();
			if(!response.ok) {
			  console.log("error:", responseData.error)
			  throw new Error(responseData.error.message);
			}
	
			if(response.status === 200) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Successfully sign In',
					timer: 2000
				})
				dispatch(authActions.login({
					token: responseData.idToken,
					expiresIn: responseData.expiresIn,
					userInfo: {
						email: responseData.email,
						userId: responseData.localId
					}
				}));
				const expirationTime = new Date(
					new Date().getTime() + +responseData.expiresIn * 1000
				);
				dispatch(setLogoutTimer(expirationTime.toISOString()))
			//   const expireTime = new Date(new Date().getTime() + (10 * 1000))
			//   authCtx.login(responseData.idToken, expireTime.toISOString() );
			//   authCtx.userData(responseData);
			//   history.replace("/");
			  console.log("localId:", responseData)
			}
			dispatch(layoutActions.showLoader(false));
		} catch (error) {
			dispatch(layoutActions.showLoader(false));
			console.log("error in catch:", error.message)

			if(error.message === 'INVALID_EMAIL') {
				errorMsg = "Please entered valid email"
			}

			if(error.message === 'EMAIL_NOT_FOUND') {
				errorMsg = "Entered email is not found"
			}
			
			if(error.message.includes('INVALID_PASSWORD')) {
				errorMsg = "Entered password is invalid"
			}

            if(error.message.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) { 
				errorMsg = "We have blocked all requests from this device due to unusual activity. Try again later."
			}

			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: errorMsg
			})
		}
	}

	const loginHandler = (data) => {
		sendRequest({
			email: data.email,
			password: data.password
		});
	}

	return (
		<div className="container margin-bottom-100px">
			<Helmet>
				<title>Sign In | Cook Note - Food Recipes</title>
			</Helmet>
			<div id="log-in" className="site-form log-in-form box-shadow border-radius-10">
				<div className="form-output">
					<form onSubmit={handleSubmit(loginHandler)}>
						<div className="form-group label-floating">
							<label className="control-label">Your Email</label>
							<InputControl className={`form-control ${errors.email && 'inValid'}`}
								placeholder="Enter Email" 
								type="text" 
								ref={emailRef} 
								{...register("email", { 
									required: "Email Address is required",
									pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
								})}/>
							{errors.email && errors.email.type === "required" && <p className="text-main-color">Please enter email</p>}
							{errors.email && errors.email.type === "pattern" && <p className="text-main-color">Please enter valid email</p> }
						</div>
						<div className="form-group label-floating">
							<label className="control-label">Your Password</label>
							<InputControl className={`form-control ${errors.password && 'inValid'}`}
								placeholder="Enter Pasword" 
								type="password" 
								ref={passwordRef} 
								{...register("password", 
								{ required: true, maxLength: 10, minLength: 6 })}/>
								{errors.password && errors.password.type === "required" && <p className="text-main-color">Please enter password</p>}
								{errors.password && errors.password.type === "minLength" && <p className="text-main-color">Please enter minimum 6 characters</p> }
								{errors.password && errors.password.type === "maxLength" && <p className="text-main-color">Please enter maximum 10 characters</p> }
						</div>
						<Link to="/forgot-password">Forgot password?</Link>
						<button type="submit" className="btn btn-md btn-primary full-width" disabled={!isValid}>Sign In</button>
						<p>Don't you have an account? <Link to="/singup">Register Now!</Link> </p>
					</form>
				</div>
			</div>
		</div>
    )
}

export default Signin;