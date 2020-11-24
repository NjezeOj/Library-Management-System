import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    policies: [],
    status: 'idle',
    error: null
}

export const fetchPolicies = createAsyncThunk('policy/fetchPolicies', async () => {
    const response = await axios.get('http://localhost:5000/booklending/')
    return response.data;
})//payload creator callback function

export const addNewPolicies = createAsyncThunk('policy/addNewPolicy',
    async (nobooksstudent, nobookslecturer, maxdaysstudent, maxdayslecturer, penstudent,penlecturer) => {
        
        const response = await axios.post('http://localhost:5000/booklending/policy', {
            maxnobooksstudent: nobooksstudent,
            maxnobookslecturer: nobookslecturer,
            maxnodaysstudent: maxdaysstudent,
            maxnodayslecturer: maxdayslecturer,
            penaltystudent: penstudent,
            penaltylecturer: penlecturer
        })
        return response.data
    })


const bookLendingSlice = createSlice({
    name: 'policies',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchPolicies.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPolicies.fulfilled]: (state, action) => {
            state.status = "succeeded"
            // Add any fetched posts to the array
            state.categories = state.policies.concat(action.payload)
        },
        [fetchPolicies.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        },
        [addNewPolicies.fulfilled]: (state, action) => {
            // Add the new post object to our posts array
            state.policies.push(action.payload)
        }
    }
})


export default bookLendingSlice.reducer

export const selectAllCategories = state => state.policies.policies



