import { createSlice } from '@reduxjs/toolkit';
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
        console.log("call login action")
        setTimeout(() => {
            dispatch(authSlice.actions.login());
            console.log("asyn call login action")
        }, 3000);
        console.log("user is loggedIn")
    }
}
export default authSlice;