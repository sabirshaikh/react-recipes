import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions, layoutActions } from "../Store";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
const PasswordChange = () => {
	const authState = useSelector(state => state.authReducer);
	const userToken =  useSelector(state => state.authReducer.userToken);
	const dispatch = useDispatch();
	const passwordRef = useRef();

    const {register: passwordRegister, handleSubmit: handlePasswordSubmit, formState: { errors: passwordErrors, isValid: passwordIsValid }} = useForm({
		mode: 'all',
		shouldUnregister: true,
  		reValidateMode: 'onChange',
	});

    async function sendRequest(data) {
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
			
				dispatch(authActions.setToken(responseData.idToken))
				dispatch(authActions.setEmail(responseData.email))
			}
			dispatch(layoutActions.showLoader(false));
		} catch (error) {
			dispatch(layoutActions.showLoader(false));
			console.log("error in catch:", error.message)
			
			if(error.message === 'TOKEN_EXPIRED') {
				errorMsg = "Your session is expired. Please login again!"

				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: errorMsg,
					timer: 2000
				}).then(() => {
                    dispatch(authActions.logout())
                })
			}
			
			if(error.message === 'EMAIL_EXISTS') {
				errorMsg = " The email address is already in use by another account."
			}

			if(error.message === 'INVALID_ID_TOKEN') {
				errorMsg = "The "
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: errorMsg
                }).then(() => {
                    dispatch(authActions.logout())
                })
			}

			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: errorMsg
			}).then(() => {
                dispatch(authActions.logout())
            })
		}
	   
	}

    const passwordChangeHandler = (data) => {
		console.log("password data:", data)
		sendRequest({
			url: 'https://identitytoolkit.googleapis.com/v1/accounts:update',
			payload: {
				idToken: userToken,
				password: data.password
			},
			successMessage: "Successfully changed your password"
		});
	}

    return (
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
    )

}

export default PasswordChange;