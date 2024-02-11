import { createSlice } from "@reduxjs/toolkit";

const initialState: string = 'All'

const filterSlice = createSlice ({
    name: 'filterCompleted',
    initialState,
    reducers: {
        filterAll(state, action) {
            state.filter = 'All'
        },
        filterNotCompleted(state, action) {
            state.filter = 'Not'
        },
        filterCompleted(state, action) {
            state.filter = 'Yes'
        },
}})

export const { filterAll, filterNotCompleted, filterCompleted } = filterSlice.actions

export default filterSlice.reducer