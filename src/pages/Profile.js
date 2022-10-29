import { useEffect, useRef } from "react";
import { useHistory, Link, NavLink, Route, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions, layoutActions } from "../Store";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useForm } from "react-hook-form";
const Profile = () => {
	const MySwal = withReactContent(Swal)
	const authState = useSelector(state => state.authReducer);
	console.log("authState:",)
	const isAuthenticated = authState.isAuthenticated;
	const userToken =  useSelector(state => state.authReducer.userToken);
	const userEmail = useSelector(state => state.authReducer.userInfo ? state.authReducer.userInfo.email : '');
	const history = useHistory();
	const dispatch = useDispatch();
	const emailRef = useRef();
	const passwordRef = useRef();
	const {path, url} = useRouteMatch();

    const { register, handleSubmit, formState: { errors, isValid }} = useForm({
		mode: 'all',
		shouldUnregister: true,
  		reValidateMode: 'onChange',
	});

	const {register: passwordRegister, handleSubmit: handlePasswordSubmit, formState: { errors: passwordErrors, isValid: passwordIsValid }} = useForm({
		mode: 'all',
		shouldUnregister: true,
  		reValidateMode: 'onChange',
	});


	useEffect(() => {
		dispatch(layoutActions.setTitle('User Profile'));
		dispatch(layoutActions.setHeaderAlignment('text-center'));
	}, [dispatch])

    useEffect(() => {
		if (!isAuthenticated) {
			history.push("/signin");
		}
    }, [isAuthenticated])


	console.log("Errors:", errors, isValid)


	async function sendRequest(data) {
		console.log("data:", data)
		let errorMsg = 'Something went wrong!'
		try {
			dispatch(layoutActions.showLoader(true));
		  	let url = `${data.url}?key=AIzaSyDRohny3ltD8ORRdQxLQfLCtyHgWRJjk9I`;
		  	const response = await fetch(url,{
				method: 'POST',
				body: JSON.stringify(data.payload),
				headers: {
				    'Content-Type': 'application/json'
				}
			})
	
			const responseData = await response.json();
			console.log("error:", responseData)
			if(!response.ok) {
			  console.log("error:", responseData)
			  throw new Error(responseData.error.message);
			}
	
			if(response.status === 200) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: data.successMessage                   
				})
			//   const expireTime = new Date(new Date().getTime() + (10 * 1000))
			//   authCtx.login(responseData.idToken, expireTime.toISOString() );
			//   authCtx.userData(responseData);
			//   history.replace("/");
				dispatch(authActions.setToken(responseData.idToken))
				dispatch(authActions.setEmail(responseData.email))
			  	console.log("localId:", responseData)
			}
			dispatch(layoutActions.showLoader(false));
		} catch (error) {
			dispatch(layoutActions.showLoader(false));
			console.log("error in catch:", error.message)
			
			if(error.message === 'TOKEN_EXPIRED') {
				errorMsg = "Your session is expired. Please login again!"

				MySwal.fire({
					icon: 'error',
					title: 'Error',
					text: errorMsg,
					timer: 2000,
					willClose: () => {
						dispatch(authActions.logout());
					}
				})
			}
			
			if(error.message === 'EMAIL_EXISTS') {
				errorMsg = " The email address is already in use by another account."
			}

			if(error.message === 'INVALID_ID_TOKEN') {
				errorMsg = "The user's credential is no longer valid. The user must sign in again."
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

	const emailChangeHandler = (data) => {
		sendRequest({
			url: 'https://identitytoolkit.googleapis.com/v1/accounts:update',
			payload: {
				idToken: userToken,
				email: data.email
			},
			successMessage: "Successfully change your email"
		});
	}

	const passwordChangeHandler = (data) => {
		console.log("password data:", data)
		sendRequest({
			url: 'https://identitytoolkit.googleapis.com/v1/accounts:update',
			payload: {
				idToken: userToken,
				password: data.password
			},
			successMessage: "Successfully change your password"
		});
	}
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
				<div className="site-form log-in-form box-shadow border-radius-10">
					<div className="form-output">
						<form onSubmit={handleSubmit(emailChangeHandler)}>
							<div className="form-group label-floating">
								<p>Current Email: {userEmail}</p>
								<label className="control-label">New Email</label>
								<input className={`form-control ${errors.email && 'inValid'}`}
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
							<button type="submit" className="btn btn-md btn-primary full-width" disabled={!isValid}>Submit</button>
						</form>
					</div>
				</div>
			</Route>
			<Route path={`${path}/change-password`}>
				<div className="site-form log-in-form box-shadow border-radius-10">
					<div className="form-output">
						<form onSubmit={handlePasswordSubmit(passwordChangeHandler)}>
							<div className="form-group label-floating">
								<label className="control-label">New Password</label>
								<input className={`form-control ${passwordErrors.password && 'passwordIsValid'}`}
									placeholder="Enter Pasword" 
									type="password" 
									ref={passwordRef} 
									{...passwordRegister("password", 
									{ required: true, maxLength: 10, minLength: 6 })}/>
									{passwordErrors.password && passwordErrors.password.type === "required" && <p className="text-main-color">Please enter password</p>}
									{passwordErrors.password && passwordErrors.password.type === "minLength" && <p className="text-main-color">Please enter minimum 6 characters</p> }
									{passwordErrors.password && passwordErrors.password.type === "maxLength" && <p className="text-main-color">Please enter maximum 10 characters</p> }
									
								</div>
							<button type="submit" className="btn btn-md btn-primary full-width" disabled={!passwordIsValid}>Submit</button>
						</form>
					</div>
				</div>
			</Route>
		</div>
    )
}

export default Profile;