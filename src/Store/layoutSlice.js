import { createSlice } from '@reduxjs/toolkit';

const layoutState = {
    headerAlignment: 'text-left',
    pageTitle: 'Home',
    showLoader: false
}
const layoutSlice = createSlice({
    name: 'layoutSlice',
    initialState: layoutState,
    reducers: {
        setTitle(state, action) {
            state.pageTitle = action.payload
        },
        setHeaderAlignment(state, action) {
            state.headerAlignment = action.payload
        },
        showLoader(state, action) {
            state.showLoader = action.payload
        }
    }
})

export default layoutSlice;