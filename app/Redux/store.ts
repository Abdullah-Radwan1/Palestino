import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart/cartSlice";
import cartUISlice from "./Cart/cartUIslice";
export const store = configureStore({
 reducer: {
  cart: CartSlice,
  cartUI: cartUISlice,
 },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
