import { configureStore } from "@reduxjs/toolkit";
import pkgReducer from "./packages"

//import authReducer from "./auth";
//auth: authReducer,


const store = configureStore({
  reducer: {
    
   
    packages: pkgReducer
    
  },
});
export default store;
