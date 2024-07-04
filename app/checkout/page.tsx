import { Input } from "@mui/material";
import React from "react";
import "../css/checkout.css";
import { Favorite } from "@mui/icons-material";

import "@/app/css/checkout.css";

const Contact = () => {
 return (
  <div className="checkout container">
   <form className="flex flex-col">
    <Input className="input" placeholder="name" />
    <Input className="input" placeholder="E-mail" />
    <Input className="input" placeholder="number" />
    <Input className="input" placeholder="postal code" />
   </form>
   <div className="btn">
    <button>Pay now</button>
   </div>

   <div className="text-center pt-10 pb-10">
    <h1>
     Wish You a Happy Meal <Favorite fontSize="large" sx={{ color: "#fd4659" }} />
    </h1>
    <h2>don't forget to Say بسم الله</h2>
   </div>
  </div>
 );
};

export default Contact;
