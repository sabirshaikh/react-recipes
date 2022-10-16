import { createSlice } from '@reduxjs/toolkit';
import { layoutActions } from '.';
const initialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
});

export const asynLogin = () => {
    return (dispatch) => {
        dispatch(layoutActions.showLoader(true));
        console.log("call login action")
        setTimeout(() => {
            dispatch(authSlice.actions.login());
            console.log("asyn call login action")
            dispatch(layoutActions.showLoader(false));
        }, 2000);
        console.log("user is loggedIn")
    }
}
export default authSlice;