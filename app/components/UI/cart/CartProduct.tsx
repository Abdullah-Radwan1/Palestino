"use client";
import Image  from "next/image";
import React from "react";
import { Add, Close, Remove } from "@mui/icons-material";
import "@/app/css/shoppingcart.css";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct, deleteProduct, CartItem } from "@/app/Redux/Cart/cartSlice";

interface CartItems {
    item: CartItem;
  }



const CartProduct = (CartItems: CartItems ) => {
 const dispatch = useDispatch();
 const { price, title, image01, id, totalprice, quantity } = CartItems.item;
 const incrementQuantity = () => dispatch(addProduct({ title, price, id, image01 }));
 const decrementQuantity = () => {dispatch(removeProduct(id));};
 const deleteTheProduct = () => {dispatch(deleteProduct(id));};

 return (
  <>
   <div className="p-2  mt-10 mb-10 cart-info flex justify-evenly items-center">
    <div>
     <Image className=" shopping-image " alt="" src={image01} />
     <span className=" flex justify-center">{price}$</span>
    </div>

    <div className=" flex-1 text-center  ">
     <p>{title}</p>
     <span>{totalprice}$</span>
    </div>

    <div className="add-remove mr-2">
     <button onClick={incrementQuantity}>
      <Add sx={{ fontSize: "15px" }} />
     </button>
     <p style={{ color: "black" }}>{quantity}</p>

     <button onClick={decrementQuantity}>
      <Remove sx={{ fontSize: "15px" }} />
     </button>
    </div>

    <button onClick={deleteTheProduct}>
     <Close fontSize="small" className="close" />
    </button>
   </div>
  </>
 );
};

export default CartProduct;
