import { configureStore } from "@reduxjs/toolkit";
import web3AuthReducer from "./web3AuthSlice";

export const store = configureStore({
  reducer: {
    web3Auth: web3AuthReducer,
  },
});
