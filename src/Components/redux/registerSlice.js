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
        setUser: (state, action) => {
            state.username = action.payload;
        },
    },
});

export const { setUser } = registrationSlice.actions;
export default registrationSlice.reducer;
