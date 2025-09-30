import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./SLices/cartSlice";


export const store = configureStore({
    reducer:{
        cart:cartReducer   
    }
})