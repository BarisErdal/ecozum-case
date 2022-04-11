import { configureStore } from "@reduxjs/toolkit";
import pkgReducer from "./packages"
import authReducer from "./auth";


const store = configureStore({
  reducer: {
    
    packages: pkgReducer,
    auth: authReducer
    
  },
});
export default store;
