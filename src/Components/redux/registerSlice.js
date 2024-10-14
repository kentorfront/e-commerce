// features/registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    password: '',
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const { setUsername, setEmail, setPassword } = registrationSlice.actions;
export default registrationSlice.reducer;
