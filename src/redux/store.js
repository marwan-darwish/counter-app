import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartslice/cartSlice"
export const store = configureStore({
    reducer: {
cart:cartReducer
    },
  })