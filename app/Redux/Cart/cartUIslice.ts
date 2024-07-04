import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartIsVisible: false,
};

const cartUISlice = createSlice({
 name: "cartUi",
 initialState,
 reducers: {
  toggleUIcart: (state) => {
   state.cartIsVisible = !state.cartIsVisible;
  },
 },
});


export const {toggleUIcart} = cartUISlice.actions

export default cartUISlice.reducer;
