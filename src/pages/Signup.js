import { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { layoutActions } from "../Store";
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
		dispatch(layoutActions.setTitle('Sign Up'));
		dispatch(layoutActions.setHeaderAlignment('text-center'));
	}, [dispatch])

    useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}
    }, [isAuthenticated])

	async function sendRequest() {
		let errorMsg = 'Something went wrong!'
		try {
			dispatch(layoutActions.showLoader(true));
		  	let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRohny3ltD8ORRdQxLQfLCtyHgWRJjk9I';
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
			  console.log("error:", responseData.error)
			  throw new Error(responseData.error.message);
			}
	
			if(response.status === 200) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Successfully sign up',
					timer: 2000,
					willClose: () => {
						history.push("/signin");
					}
				})
			//   const expireTime = new Date(new Date().getTime() + (10 * 1000))
			//   authCtx.login(responseData.idToken, expireTime.toISOString() );
			//   authCtx.userData(responseData);
			//   history.replace("/");
			  console.log("localId:", responseData.expiresIn)
			}
			dispatch(layoutActions.showLoader(false));
		} catch (error) {
			dispatch(layoutActions.showLoader(false));
			console.log("error in catch:", error.message)

			if(error.message === 'INVALID_EMAIL') {
				errorMsg = "Entered email is invalid"
			}
			
			if(error.message.includes('WEAK_PASSWORD')) {
				errorMsg = "Password should be at least 6 characters"
			}

			if(error.message.includes('EMAIL_EXISTS')) {
				errorMsg = "The email address is already in use by another account"
			}

			if(error.message.includes('OPERATION_NOT_ALLOWED')) { 
				errorMsg = "Password sign-in is disabled for this project."
			}

			if(error.message.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) { 
				errorMsg = "We have blocked all requests from this device due to unusual activity. Try again later."
			}
			
			console.log("sabir error:", error.message)
			
		//   alert(error);
		  	MySwal.fire({
				icon: 'error',
				title: 'Error',
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
					<button type="submit" className="btn btn-md btn-primary full-width">Sign Up</button>
					<p>Already have an account? <Link to="/signin">Login Now!</Link> </p>
				</form>
			</div>
		</div>
		

	</div>
    )
}

export default Signup;