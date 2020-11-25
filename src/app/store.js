import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoriesReducer from '../features/category/categoriesSlice';
import policiesReducer from '../features/booklending/bookLendingSlice';
import booksSlice from '../features/books/booksSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
    policies: policiesReducer,
    books: booksSlice
  }
});
