"use client";
import React from "react";
import "../css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../Redux/Cart/cartSlice";
import Image from "next/image";
import { Delete } from "@mui/icons-material";
import { Rootstate } from "../Redux/store";
import { CartItemsTypes } from "../types/types";
import Link from "next/link";

interface AddedProductRowProps {
 item: CartItemsTypes;
}
const Cart = () => {
 //selectors  of the states
 const products = useSelector((state: Rootstate) => state.cart.cartItems);
 const total = useSelector((state: Rootstate) => state.cart.totalPrice);
 // the added products in the table
 const AddedProductRow = (props: AddedProductRowProps) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
   dispatch(deleteProduct(id));
  };

  return (
   <tr>
    <td className="text-center cart__img-box">
     <div className="img w-[100px] m-auto">
      <Image src={image01} alt="" />
     </div>
    </td>
    <td className="text-center">
     <p>{title}</p>
    </td>
    <td className="text-center">
     <p>{price}$</p>
    </td>
    <td className="text-center">
     <p>{quantity}</p>
    </td>
    <td className="text-center">
     <button onClick={deleteItem}>
      <p>
       <Delete />
      </p>
     </button>
    </td>
   </tr>
  );
 };

 return (
  <div className="big-table">
   {products.length === 0 ? (
    <div className="h-[60vh] text-center relative top-[10rem]">
     <h1>No items have been added yet </h1>
    </div>
   ) : (
    <>
     <table className="m-auto">
      <thead>
       <tr>
        <th className="text-xs">Image</th>
        <th className="text-xs">Product Title</th>
        <th className="text-xs">Price</th>
        <th className="text-xs">Quantity</th>
        <th className="text-xs">Delete</th>
       </tr>
      </thead>
      <tbody>
       {products.map((item) => (
        <AddedProductRow item={item} key={item.id} />
       ))}
      </tbody>
     </table>

     <div className="!mt-20 container extra-details flex flex-col">
      <h2>
       subtotal : <span>{total}$</span>
      </h2>
      <p>including VAT</p>
      <div className="btns flex gap-5 mt-6">
       <Link href={"/checkout"}>
        <button>go to checkout</button>
       </Link>
      </div>
     </div>
    </>
   )}
  </div>
 );
};

export default Cart;
