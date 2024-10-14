import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './registerSlice';

export const store = configureStore({
    reducer: {
        registration: registrationReducer,
    },
});
