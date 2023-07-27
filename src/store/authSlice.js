import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../context/initial-states/AuthInitialState";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setAuthFromSlice: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { setAuthFromSlice } = authSlice.actions;
export default authSlice.reducer;
