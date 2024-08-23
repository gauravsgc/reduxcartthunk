import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
//import your product reuducer:
import productReducer from './productSlice1'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer
  },
})