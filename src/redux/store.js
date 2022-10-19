import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartslice/cartSlice"
import productSlice from "./productslice/productSlice"
export const store = configureStore({
    reducer: {
cart:cartReducer,
products:productSlice
},
  })