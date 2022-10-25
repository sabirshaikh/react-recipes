import { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions, layoutActions } from "../Store";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useInput from "../Hooks/useInput";
import InputControl from "../components/UI/InputControl";
const Signin = () => {
	const MySwal = withReactContent(Swal)
	const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
	const history = useHistory();
	const dispatch = useDispatch();
	const emailRef = useRef();
	const passwordRef = useRef();

	const {
        value: enteredemailValue,
        hasError: emailHasError,
        valueChangedHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        isValid: enteredEmailValueIsValid,
        reset: resetEmailValue
    } = useInput(value => value.trim() !== '');
	
	const {
        value: enteredpasswordValue,
        hasError: passwordHasError,
        valueChangedHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        isValid: enteredPasswordValueIsValid,
        reset: resetPasswordValue
    } = useInput(value => value.trim() !== '');


	let formIsValid = false;
    if (enteredEmailValueIsValid &&  enteredPasswordValueIsValid) {
        formIsValid = true
    }

	useEffect(() => {
		dispatch(layoutActions.setTitle('Sing In'));
		dispatch(layoutActions.setHeaderAlignment('text-center'));
	}, [])

    useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}
    }, [isAuthenticated])

	async function sendRequest() {
		let errorMsg = 'couldn\'t sign in';
		try {
			dispatch(layoutActions.showLoader(true));
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRohny3ltD8ORRdQxLQfLCtyHgWRJjk9I';
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
					text: 'Successfully sign In',
					timer: 2000,
					willClose: () => {
						// history.push("/");
					}
				})
            dispatch(authActions.login({
                token: responseData.idToken,
                userInfo: {
                    email: responseData.email,
                    expiresIn: responseData.expiresIn
                }
            }));
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
			
			console.log("sabir error:", error.message)
		  	MySwal.fire({
				icon: 'error',
				title: 'Error',
				text: errorMsg
			})
		}
	   
	}

	const loginHandler = (event) => {
		event.preventDefault();
        console.log("form is validated:", formIsValid)
        if(!formIsValid) {
            console.log("form is invalidated")
            return;
        } 
        resetEmailValue();
		resetPasswordValue();
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
						<InputControl 
							className={`form-control ${emailHasError ? 'inValid' : ''}`}
							placeholder="Enter Email" 
							type="email" ref={emailRef} 
							onChange={emailChangedHandler}
							onBlur={emailBlurHandler}
						/>
						{emailHasError  && <p className="text-main-color mt-3">Please enter email</p>}
					</div>
					<div className="form-group label-floating">
						<label className="control-label">Your Password</label>
						<InputControl 
							className={`form-control ${passwordHasError ? 'inValid' : ''}`}
							placeholder="Enter Pasword" 
							type="password" 
							ref={passwordRef} 
							onChange={passwordChangedHandler}
							onBlur={passwordBlurHandler}
						/>
						{passwordHasError  && <p className="text-main-color mt-3">Please enter password</p>}
					</div>
					<button type="submit" className="btn btn-md btn-primary full-width" disabled={!formIsValid}>Sign In</button>
					<p>Don't you have an account? <Link to="/singup">Register Now!</Link> </p>
				</form>
			</div>
		</div>
	</div>
    )
}

export default Signin;