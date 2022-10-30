import { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { layoutActions } from "../Store";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
	const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
	const history = useHistory();
	const dispatch = useDispatch();
	const emailRef = useRef();

    const { register, handleSubmit, formState: { errors, isValid }} = useForm({
		mode: 'all',
		shouldUnregister: true,
  		reValidateMode: 'onChange',
	});
	useEffect(() => {
		dispatch(layoutActions.setTitle('Forgot Password'));
		dispatch(layoutActions.setHeaderAlignment('text-center'));
	}, [dispatch])

    useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}
    }, [isAuthenticated])

	console.log("Errors:", errors, isValid)


	async function sendRequest(data) {
		console.log("data:", data)
		let errorMsg = 'Something went wrong!'
		try {
			dispatch(layoutActions.showLoader(true));
		  	let url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDRohny3ltD8ORRdQxLQfLCtyHgWRJjk9I';
		  	const response = await fetch(url,{
				method: 'POST',
				body: JSON.stringify({
                    requestType: "PASSWORD_RESET",
                    email: data.email
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
					text: 'Reset Password link has been sent to your email.'                    
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

			if(error.message === 'EMAIL_NOT_FOUND') {
				errorMsg = "Entered email is not found."
			}
			
            console.log("sabir error:", error.message)
			
		//   alert(error);
		  	Swal.fire({
				icon: 'error',
				title: 'Error',
				text: errorMsg
			})
		}
	   
	}

	const loginHandler = (data) => {
		console.log("data:", JSON.stringify(data));
		console.log("email:", data.email);
		console.log("password:", data.password);
		sendRequest({
			email: data.email
		});
	}
	
    return (
        <div className="container margin-bottom-100px">
	
		<div id="log-in" className="site-form log-in-form box-shadow border-radius-10">

			<div className="form-output">
				<form onSubmit={handleSubmit(loginHandler)}>
					<div className="form-group label-floating">
						<label className="control-label">Your Email</label>
						<input className={`form-control ${errors.email && 'inValid'}`}
							placeholder="Enter Email" 
							type="text" 
							ref={emailRef} 
							{...register("email", { 
								required: "Email Address is required",
								pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
							})}/>
                        <small id="emailHelp" className="form-text text-muted">We'll send you the password reset link to your email.</small>
						{errors.email && errors.email.type === "required" && <p className="text-main-color">Please enter email</p>}
						{errors.email && errors.email.type === "pattern" && <p className="text-main-color">Please enter valid email</p> }
					</div>
					<button type="submit" className="btn btn-md btn-primary full-width" disabled={!isValid}>Send Reset Link</button>
				</form>
			</div>
		</div>
	</div>
    )
}

export default ForgotPassword;