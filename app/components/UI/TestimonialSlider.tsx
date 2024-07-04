"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../css/testimonial.css";
import { Avatar } from "@mui/material";

let settings = {
 dots: true,
 infinite: true,
 autoplay: true,
 speed: 1000,
 slidesToShow: 1,
 autoPlaySpeed: 200,
 slidesToScroll: 1,
};

const TestimonialSlider = () => {
 return (
  <div className="slider z-20 pb-6">
   <span className="text-2xl">Testimonials</span>
   <h1 className="pt-2 pb-2">
    what our <span>Costumers</span> are saying !
   </h1>
   <p className="w-[80%]">here you can find our costumers opinions about us</p>

   <Slider className="mt-8" {...settings}>
    <div>
     <h2>awesome food!</h2>
     <p className="pt-2 pb-2">
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus alias minus adipisci
      blanditiis natus cumque accusantium impedit expedita modi"
     </p>
     <Avatar sx={{ bgcolor: "blue" }} />
    </div>
    <div>
     <h2>amazing service</h2>
     <p className="pt-2 pb-2">
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus alias minus adipisci
      blanditiis natus cumque accusantium impedit expedita modi"
     </p>
     <Avatar sx={{ bgcolor: "green" }} />
    </div>
    <div>
     <h2>Food arrived so fast!</h2>
     <p className="pt-2 pb-2">
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus alias minus adipisci
      blanditiis natus cumque accusantium impedit expedita modi"
     </p>
     <Avatar sx={{ bgcolor: "red" }} />
    </div>
   </Slider>
  </div>
 );
};

export default TestimonialSlider;
