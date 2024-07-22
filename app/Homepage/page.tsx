import React from "react"
import hero from "@/public/hero.png"
import Image from "next/image"
import "@/app/css/hero.css"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import Categories from "../components/UI/categories"
import Advantages from "../components/UI/Advantages"
import Products from "../components/UI/All-Products"
import WhyPalestine from "../components/UI/WhyPalestine"
import  Testimonial  from "../components/UI/Testimonial"

const Homepage = () => {
 return (
  <>
   <div className="parent mt-4 md:mt-8">
    {/* hero section   */}
    <div className="hero container flex justify-center items-center gap-0 ">
     {/* info */}
     <div className="info">
      <h3 className="text-xl">The Best Palestinian Food </h3>
      <h1 className=" title  text-4xl ">
       <span>HUNGRY?</span> just order your <span>food</span> right
       <span> now!</span>
      </h1>
      <p className="w-[80%] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo qui nam temporibus commodi vitae.</p>
      {/* buttons  */}
      <div className="buttons flex justify-start gap-x-10">
       <button className="order">Order now </button>
       <button className="categ">See Categories</button>
      </div>
      {/* pros  */}
      <div className="pros flex items-center gap-10 mt-5">
       <div className="free flex gap-3 items-center">
        <div>
         <DirectionsCarIcon sx={{ color: "#fd4659" }} />
        </div>
        <p className="text-slate-500">free delivery</p>
       </div>
       <div className="secured flex gap-3 items-center">
        <div>
         <CheckCircleIcon sx={{ color: "#fd4659" }} />
        </div>
        <p className="text-slate-500">Secured Checkout</p>
       </div>
      </div>
     </div>
     {/* hero image */}
     <div className="img hero md:w-[500px] md:h-[500px] h-[300px] w-[300px] ">
      <Image src={hero} alt="iamge" fill />
     </div>
    </div>
    {/* categories  */}
    <Categories />
    {/* Advantages  */}
    <Advantages />
    {/* Products  */}
    <Products />
    {/* why Palestine  */}
    <WhyPalestine />
    {/* testimonial  */}
    <Testimonial />
    <button></button>
   </div>
  </>
 )
}

export default Homepage
