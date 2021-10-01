import { configureStore } from '@reduxjs/toolkit'

import errorReducer from "./reduxSlices/errorSlice";
import userReducer from "./reduxSlices/userSlice";
import profileReducer from "./reduxSlices/profileSlice";

export const store = configureStore({
  reducer: {
      errors: errorReducer,
      users: userReducer,
      profile: profileReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;