import { createSlice } from '@reduxjs/toolkit';
import { authActions, layoutActions } from '.';
import Swal from 'sweetalert2';
import { authChannel } from '../util/GlobalAuthChannel';

let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
  
    const remainingDuration = adjExpirationTime - currentTime;
  
    return remainingDuration;
  };
  
const initialState = {
    isAuthenticated: false,
    userInfo: null,
    userToken: null,
    userId: null,
    expireAt: null
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = !!action.payload.token;
            state.userToken = action.payload.token;
            state.userInfo = action.payload.userInfo;
            state.userId = action.payload.userId;
            authChannel.postMessage("login");
        },
        logout(state) {
            state.isAuthenticated = !!state.token;
            state.userInfo = null;
            state.userToken = null;
            state.userId = null;
            state.expireAt = null;
            authChannel.postMessage("logout");

            Swal.fire({
                icon: 'success',
                title: 'Logout',
                text: 'Logout Successfully',
                timer: 2000
            })
        },

        setToken(state, action) {
            state.userToken = action.payload
        },

        setEmail(state, action) {
            state.userInfo.email = action.payload
        },

        setExpireAt(state, action) {
            state.expireAt = action.payload;
        }
    }
});

export const asynLogin = () => {
    return (dispatch) => {
        dispatch(layoutActions.showLoader(true));
        setTimeout(() => {
            dispatch(authSlice.actions.login());
            dispatch(layoutActions.showLoader(false));
        }, 2000);
    }
}

export const setLogoutTimer = (data) => {
    return (dispatch, getState) => {
        const {authReducer} = getState();
        console.log("data:", authReducer.expireAt)
        const remainingTime = calculateRemainingTime(data);

        if(logoutTimer) {
            clearTimeout(logoutTimer); 
        }

        dispatch(authActions.setExpireAt(data))
        logoutTimer = setTimeout(() => {
            dispatch(authActions.logout())
        }, remainingTime);
        console.log("remainingTime:", remainingTime)
    }
}

export const checkLogoutTimer = () => {
    return (dispatch, getState) => {
        const {authReducer} = getState();
            const remainingTime = calculateRemainingTime(authReducer.expireAt);
            console.log("remaing time:", remainingTime)
            if(remainingTime > 0) {
                if(logoutTimer) {
                    clearTimeout(logoutTimer); 
                }
                logoutTimer = setTimeout(() => {
                    dispatch(authActions.logout())
                }, remainingTime);
            } else {
                dispatch(authActions.logout())
            }
    }
}
export default authSlice;