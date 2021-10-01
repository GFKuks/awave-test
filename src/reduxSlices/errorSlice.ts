import { createSlice } from "@reduxjs/toolkit";


interface ErrorState {
    value: string;
}

const initialState: ErrorState = {
    value: ""
}

export const errorSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        setErrors: (state, action) => {
            state.value = action.payload
        },
        clearErrors: (state) => {
            state.value = ""
        }
    },
});

// Action creators are generated for each case reducer function
export const { setErrors, clearErrors } = errorSlice.actions;

export default errorSlice.reducer;