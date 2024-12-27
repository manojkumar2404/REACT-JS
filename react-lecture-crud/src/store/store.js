import { configureStore } from "@reduxjs/toolkit";
import cartslice from './slice/cartSlice'
import wishslice from './slice/wishSlice'

const mystore = configureStore({

    reducer:{
        cart: cartslice,
        wish:wishslice
    }

})


export default mystore;