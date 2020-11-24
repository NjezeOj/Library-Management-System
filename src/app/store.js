import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoriesReducer from '../features/category/categoriesSlice';
import policiesReducer from '../features/booklending/bookLendingSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
    policies: policiesReducer
  }
});
