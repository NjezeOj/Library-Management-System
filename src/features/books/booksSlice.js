import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    books: [],
    status: 'idle',
    error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const response = await axios.get('http://localhost:5000/book/')
    return response.data;
})//payload creator callback function

export const addNewBooks = createAsyncThunk('books/addNewBooks',
    async initialBooks => {
        const response = await axios.post('http://localhost:5000/book/register', initialBooks)
        return response.data
    })


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        /*categoryAdded: {
            reducer(state, action){
                state.categories.push(action.payload)
            }, 
            prepare(category){
                return{
                    payload:{
                        //id: nanoid(),
                        category
                    } 
                }
            }
        }*/
    },
    extraReducers: {
        [fetchBooks.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.status = "succeeded"
            // Add any fetched posts to the array
            state.books = state.books.concat(action.payload)
        },
        [fetchBooks.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        },
        [fetchBooks.fulfilled]: (state, action) => {
            // Add the new post object to our posts array
            state.books.push(action.payload)
        }
    }
})





export default booksSlice.reducer

export const selectAllCategories = state => state.books.books




