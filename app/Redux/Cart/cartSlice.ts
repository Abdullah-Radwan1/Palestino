import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItemsTypes, CartItemDispatchs, InitialState } from "@/app/types/types"

// if there are items in the LS it gets it or gives the default value
const getItemFromLocalStorage = (key: string, defaultValue: any) => {
 if (typeof localStorage !== "undefined") {
  const storedItem = localStorage.getItem(key)
  return storedItem !== null ? JSON.parse(storedItem) : defaultValue
 }
 return defaultValue
}
const Items: CartItemsTypes[] = getItemFromLocalStorage("cartItems", [])
const totalQuantityLC: number = getItemFromLocalStorage("totalQuantityLC", 0)
const totalPriceLC: number = getItemFromLocalStorage("totalPriceLC", 0)

const initialState: InitialState = {
 cartItems: Items,
 totalQuantity: totalQuantityLC,
 totalPrice: totalPriceLC,
}
///////////////  sets the items to the local storage
const setItemFunc = (items: CartItemsTypes[], totalQuantityLC: number, totalPriceLC: number) => {
 localStorage.setItem("cartItems", JSON.stringify(items))
 localStorage.setItem("totalQuantityLC", JSON.stringify(totalQuantityLC))
 localStorage.setItem("totalPriceLC", JSON.stringify(totalPriceLC))
}

const CartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addProduct: (state, action: PayloadAction<CartItemDispatchs>) => {
   state.totalQuantity++
   //checking if the product is already exists
   const newProduct = action.payload
   const existingProduct = state.cartItems.find((p) => p.id === newProduct.id)
   if (!existingProduct) {
    state.cartItems.push({
     id: newProduct.id,
     title: newProduct.title,
     image01: newProduct.image01,
     price: newProduct.price,
     quantity: 1,
     totalprice: newProduct.price,
    })
   } else {
    existingProduct.quantity++
    existingProduct.totalprice = Number(existingProduct.totalprice) + Number(newProduct.price)
   }
   state.totalPrice = state.cartItems.reduce((total, product) => total + Number(product.price) * Number(product.quantity), 0)

   setItemFunc(
    state.cartItems.map((p) => p),
    state.totalQuantity,
    state.totalPrice,
   )
  },
  removeProduct: (state, action: PayloadAction<string>) => {
   state.totalQuantity--
   const id = action.payload
   const existingProduct = state.cartItems.find((item) => item.id === id)
   //this code fixes if the proplem is undefined
   if (!existingProduct) {
    return
   }
   if (existingProduct.quantity === 1) {
    state.cartItems = state.cartItems.filter((item) => item.id !== id)
   } else {
    existingProduct.quantity--
    existingProduct.totalprice = Number(existingProduct.totalprice) - Number(existingProduct.price)
   }
   state.totalPrice = state.cartItems.reduce((total, product) => total + Number(product.price) * Number(product.quantity), 0)
   setItemFunc(
    state.cartItems.map((p) => p),
    state.totalQuantity,
    state.totalPrice,
   )
  },
  deleteProduct: (state, action: PayloadAction<string>) => {
   const id = action.payload
   const existingProduct = state.cartItems.find((product) => product.id === id)
   if (existingProduct) {
    state.cartItems = state.cartItems.filter((product) => product.id !== id)
    state.totalQuantity = state.totalQuantity - existingProduct.quantity
   }
   state.totalPrice = state.cartItems.reduce((total, product) => total + Number(product.price) * Number(product.quantity), 0)
   setItemFunc(
    state.cartItems.map((p) => p),
    state.totalQuantity,
    state.totalPrice,
   )
  },
 },
})

export const { addProduct, removeProduct, deleteProduct } = CartSlice.actions
export default CartSlice.reducer
