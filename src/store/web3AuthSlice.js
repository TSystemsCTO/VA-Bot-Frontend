import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  web3auth: null,
};

const web3AuthSlice = createSlice({
  name: "web3Auth",
  initialState,
  reducers: {
    setWeb3Auth: (state, action) => {
      state.web3auth = action.payload;
    },
  },
});

export const { setWeb3Auth } = web3AuthSlice.actions;
export default web3AuthSlice.reducer;
