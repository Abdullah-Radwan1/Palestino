"use client";
import "../../css/foodDetails.css";
import "../../css/products.css";
import { Input } from "@mui/material";
import { useParams } from "next/navigation";
import { addProduct } from "@/app/Redux/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { CartItem } from "@/app/Redux/Cart/cartSlice";
import React, { useState } from "react";
import Image from "next/image";
import products from "@/app/assets/productsData"; // Ensure productsData exports Product type
import ProductCard from "@/app/components/UI/ProductCard";
import Link from "next/link";

// Assuming you have a default fallback image
import defaultImage from "@/public/pngwing.com.png";

const FoodDetails = () => {
 const dispatch = useDispatch();
 const { id } = useParams(); // Define the type of id as string
 const product = products.find((product) => product.id === id);
 const relatedProducts = products.filter((related) => related.category === product?.category);
 const [showedImg, setShowedImg] = useState(product?.image01 || defaultImage);
 const [tab, setTab] = useState("desc");

 //added product logic when clicking on it
 const addPro = () => {
    if (product) {
        const item: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image01: product.image01 || defaultImage, // Fallback image
          quantity: 1,
          totalprice: 0
        };
        dispatch(addProduct(item));
      }
 };

 return (
  <div className="FoodDetails mt-20">
   {/* Images */}
   <div className="container flex justify-center gap-x-28 gap-y-12 flex-col-reverse md:flex-row items-center">
    <div className="images flex justify-center items-center gap-x-16">
     <div className="three-img img flex flex-col gap-y-10">
      <Image onClick={() => setShowedImg(product?.image01 || defaultImage)} alt="" src={product?.image01 || "defaultImage"} />
      <Image onClick={() => setShowedImg(product?.image02 || defaultImage)} alt="" src={product?.image02 || defaultImage} />
      <Image onClick={() => setShowedImg(product?.image03 || defaultImage)} alt="" src={product?.image03 || defaultImage} />
     </div>
     <div className="one-img img">
      <Image alt="" src={showedImg} width={200} height={200} />
     </div>
    </div>

    {/* Details */}
    <div className="details flex flex-col gap-6 items-start">
     <Link href={`/menu/${id}`}>
      <h1 className="title text-5xl">{product?.title}</h1>
     </Link>
     <span className="price lg:text-2xl">price : {product?.price}$</span>
     <h3 className="category">
      category : <span>{product?.category}</span>
     </h3>
     <button onClick={addPro}>add to cart</button>
    </div>
   </div>
   {/* Description and review */}
   <div className="container">
    <div className="btns flex gap-x-10 items-center">
     <button onClick={() => setTab("desc")} className={`text-xl pb-2 ${tab === "desc" ? "active" : ""}`}>
      description
     </button>
     <button onClick={() => setTab("review")} className={`text-xl pb-2 ${tab === "review" ? "active" : ""}`}>
      review
     </button>
    </div>

    {tab === "desc" ? (
     <div className="description">
       <div className="desc w-[70%] text-slate-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iusto deserunt animi, sapiente sit saepe
        praesentium architecto tempora sint rem.
       </div>
      </div>
    ) : (
     <div className="review">
      <div className="form-group">
       <Input sx={{ width: "100%" }} type="text" placeholder="Enter your name" />
       <Input sx={{ width: "100%" }} type="text" placeholder="your E-mail" />
       <textarea className=" mt-3" placeholder="share your review"></textarea>
       <button className="mt-2">submit</button>
      </div>
     </div>
    )}
   </div>
   {/* You might also like */}
   <h1 className="container !mt-10 !mb-10 text-center text-3xl">You might also like this</h1>
   <div className="container all-products">
    {relatedProducts.map((product) => (
     <ProductCard
      key={product.id}
      id={product.id}
      title={product.title}
      image01={product.image01 }
      price={product.price}
     />
    ))}
   </div>
  </div>
 );
};

export default FoodDetails;
