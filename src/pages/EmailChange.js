import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions, layoutActions } from "../Store";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
const EmailChange = () => {
	const userToken =  useSelector(state => state.authReducer.userToken);
	const userEmail = useSelector(state => state.authReducer.userInfo ? state.authReducer.userInfo.email : '');
	const dispatch = useDispatch();
	const emailRef = useRef();

    const { register, handleSubmit, formState: { errors, isValid }} = useForm({
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
			// console.log("response:", responseData)
			if(!response.ok) {
			  throw new Error(responseData.error.message);
			}
	
			if(response.status === 200) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: data.successMessage
				})
                
                if(responseData.idToken) {
                    dispatch(authActions.setToken(responseData.idToken))
                }
                dispatch(authActions.setEmail(responseData.email));
			  	console.log("localId:", responseData)
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
					timer: 1500
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
					text: errorMsg,
					timer: 1500
				}).then(() => {
                    dispatch(authActions.logout())
                })
			}
			
            console.log("sabir error:", error.message)
			
		//   alert(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMsg,
                timer: 1500
            }).then(() => {
                dispatch(authActions.logout())
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

    return (
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
    )

}

export default EmailChange;