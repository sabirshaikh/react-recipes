import { createSlice } from '@reduxjs/toolkit';
import { layoutActions } from '.';
import Swal from 'sweetalert2';
import { BroadcastChannel } from '../util/GlobalAuthChannel';
const initialState = {
    isAuthenticated: false,
    userInfo: null,
    userToken: null,
    userId: null
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
            BroadcastChannel.postMessage("login");
        },
        logout(state) {
            state.isAuthenticated = !!state.token;
            state.userInfo = null;
            state.userToken = null;
            state.userId = null;
            BroadcastChannel.postMessage("logout");

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
export default authSlice;