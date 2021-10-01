import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models";

interface UserState {
    value: User[];
}

const initialState: UserState = {
    value: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.value = action.payload
        },
        clearUsers: (state) => {
            state.value = []
        }
    },
});

// Action creators are generated for each case reducer function
export const { setUsers, clearUsers } = userSlice.actions;

export default userSlice.reducer;