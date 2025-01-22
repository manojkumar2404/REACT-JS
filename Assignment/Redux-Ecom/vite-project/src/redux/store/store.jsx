import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";
import wishSlice from "../slice/wishSlice";

const mystore = configureStore({
    reducer:{
        cart:cartSlice,
        wish:wishSlice
    }
})

export default mystore;