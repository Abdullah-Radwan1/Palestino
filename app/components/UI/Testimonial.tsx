import Image from "next/image";
import React from "react";
import network from "@/public/network.png";
import TestimonialSlider from "./TestimonialSlider";
import "../../css/testimonial.css";

export const Testimonial = () => {
 return (
  <div className="testimonial">
   <div className="container ">
    <TestimonialSlider />
    <div className="img testi-img m-auto w-[300px] lg:w-[500px]">
     <Image alt="" src={network} />
    </div>
   </div>
  </div>
 );
};

export default Testimonial