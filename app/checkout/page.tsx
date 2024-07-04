"use client";
import { Input } from "@mui/material";
import React from "react";
import "../css/checkout.css";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useSelector } from "react-redux";
import "@/app/css/checkout.css";
import { Rootstate } from "../Redux/store";
import Link from "next/link";
const Contact = () => {
 const total = useSelector((state: Rootstate) => state.cart.totalPrice);
 return (
  <div className="checkout-big">
   {total ? (
    <div className="checkout container">
     <form className="flex flex-col">
      <Input className="input" placeholder="name" />
      <Input className="input" placeholder="E-mail" />
      <Input className="input" placeholder="number" />
      <Input className="input" placeholder="postal code" />
     </form>
     <div className="btn">
      <h3>
       subtotal : <span>{total}$</span>
      </h3>
      <button>Pay now</button>
     </div>

     <div className="text-center pt-10 pb-10">
      <h1>
       Wish You a Happy Meal <Favorite fontSize="large" sx={{ color: "#fd4659" }} />
      </h1>
      <h2>don't forget to Say بسم الله</h2>
     </div>
    </div>
   ) : (
    <div className="flex flex-col justify-center">
    <h1 className="text-center mt-10 ">
     you can browse our menu for the best Palestenian food
     <Favorite fontSize="large" sx={{ color: "tomato" }} />
    </h1>
<Link href={"menu"}><button>go to menu</button></Link>

    </div>

   )}
  </div>
 );
};

export default Contact;
