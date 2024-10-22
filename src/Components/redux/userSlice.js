import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    image: '',
    password: '',
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.image = action.payload.image;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
