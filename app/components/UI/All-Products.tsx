"use client";
import React, { useEffect, useState } from "react";
import products from "@/app/assets/productsData";
import Image from "next/image";
import "../../css/products.css";
import "../../css/popular.css";
import burger from "../../../public/hamburger.png";
import pizza from "../../../public/pizza.png";
import bread from "../../../public/fried-potatoes.png";
import all from "../../../public/all.png";
import ProductCard from "./ProductCard";

const All_Products = () => {
 const [category, setCategory] = useState("all");
 const [allProducts, setAllProducts] = useState(products);

 //logic of filtering
 useEffect(() => {
  if (category === "all") {
   setAllProducts(products);
  } else if (category === "Pizza") {
   const PizzaProducts = products.filter((item) => item.category === "Pizza");
   setAllProducts(PizzaProducts);
  } else if (category === "Burger") {
   const BurgerProducts = products.filter((item) => item.category === "Burger");
   setAllProducts(BurgerProducts);
  } else if (category === "Bread") {
   const BreadProducts = products.filter((item) => item.category === "Bread");
   setAllProducts(BreadProducts);
  }
 }, [category]);

 return (
  <>
   {/* popular section */}
   <div className="popular mt-10 mb-10">
    <div className="container">
     <h1 className="text-center text-4xl lg:text-5xl ">popular food</h1>
     <div className="popular-sec">
      <button className={`${category === "all" ? "P_active" : ""}`} onClick={() => setCategory("all")}>
       {" "}
       <Image src={all} alt="" />
       All
      </button>
      <button className={`${category === "Burger" ? "P_active" : ""}`} onClick={() => setCategory("Burger")}>
       {" "}
       <Image src={burger} alt="" /> Burger{" "}
      </button>
      <button className={`${category === "Pizza" ? "P_active" : ""}`} onClick={() => setCategory("Pizza")}>
       {" "}
       <Image src={pizza} alt="" /> Pizza{" "}
      </button>
      <button className={`${category === "Bread" ? "P_active" : ""}`} onClick={() => setCategory("Bread")}>
       {" "}
       <Image src={bread} alt="" /> Bread{" "}
      </button>
     </div>
    </div>
   </div>
   {/* products section  */}
   <div className="container all-products">
    {allProducts.map((product) => (
     <ProductCard
      key={product.id}
      id={product.id}
      title={product.title}
      image01={product.image01}
      price={product.price}

       />
    ))}
   </div>
  </>
 );
};

export default All_Products;
