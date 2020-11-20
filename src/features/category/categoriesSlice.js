import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', category: 'Horror'},
    { id: '2', category: 'Romance' }
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoryAdded(state, action) {
            state.push(action.payload)
        }
    }
    /**Remember: reducer functions must always create new state values immutably,
     *  by making copies! It's safe to call mutating functions 
     * like Array.push() or modify object fields 
     * like state.someField = someValue inside of createSlice(), 
     * because it converts those mutations into safe immutable updates internally using the Immer library, 
     * but don't try to mutate any data outside of createSlice! */
})

export const {categoryAdded} = categoriesSlice.actions

export default categoriesSlice.reducer

