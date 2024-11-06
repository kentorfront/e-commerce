import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import counterSlice from './counterSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterSlice,
    },
});
