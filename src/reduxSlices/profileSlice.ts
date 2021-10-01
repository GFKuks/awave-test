import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models";

interface ProfileState {
    value: User;
}

const initialState: ProfileState = {
    value: {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
    },
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.value = action.payload
        },
        clearProfile: (state) => {
            state.value = initialState.value
        }
    },
});

// Action creators are generated for each case reducer function
export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;