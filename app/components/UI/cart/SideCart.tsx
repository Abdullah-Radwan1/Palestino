"use client"
import "@/app/css/shoppingcart.css"
import React from "react"
import { Close } from "@mui/icons-material"
import CartProduct from "./CartProduct"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import { toggleUIcart } from "@/app/Redux/Cart/cartUIslice"
import { Rootstate } from "@/app/Redux/store"
import Link from "next/link"

const SideCart = () => {
 const togglestate = useSelector((state: Rootstate) => state.cartUI.cartIsVisible)
 const products = useSelector((state: Rootstate) => state.cart.cartItems)
 const totalAmount = useSelector((state: Rootstate) => state.cart.totalPrice)
 const dispatch = useDispatch()
 const toggle = () => {
  dispatch(toggleUIcart())
 }

 return (
  <>
   {togglestate && (
    <div data-testid={"SideCart"} className="cart-container">
     <div className="cart">
      <Button className="!absolute" onClick={toggle}>
       <Close fontSize="medium" className=" close" sx={{ color: "tomato" }} />
      </Button>
      <div className="added-product">
       {products.length === 0 ? <h3 className="m-auto text-center pt-32">there is no items yet</h3> : products.map((item) => <CartProduct key={item.id} item={item} />)}
      </div>

      <div className="cart-bottom flex justify-between ">
       <h5>Total price : {totalAmount}$</h5>
       <Link href={"/checkout"}>
        {" "}
        <button>checkout</button>
       </Link>
      </div>
     </div>
    </div>
   )}
  </>
 )
}

export default SideCart
