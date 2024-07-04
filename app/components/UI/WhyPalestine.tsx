import React from "react";
import "../../css/whypalestino.css";
import myimg from "@/public/location.png";
import Image from "next/image";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const WhyPalestine = () => {
 return (
  <div className="whypalestino">
   <div className=" container flex justify-center items-center flex-wrap">
    <div className="img sm:flex-auto lg:flex-1 ">
     <Image alt="" src={myimg} />
    </div>
    <div className="content ">
     <h1 className="title">
      {" "}
      Why <span>palestino</span> is the Best !
     </h1>
     <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem? Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. 
     </h3>
     <div className="reasons">
<div className="reas"><h3 className="head"><CheckCircleOutlineIcon className="check"/> Food safety and quality</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatem.</p></div>
<div className="reas"><h3 className="head"><CheckCircleOutlineIcon className="check"/> amazing taste</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatem.</p></div>
<div className="reas"><h3 className="head"><CheckCircleOutlineIcon className="check"/> smallest amount of time</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatem.</p></div>

     </div>
    </div>
   </div>
  </div>
 );
};

export default WhyPalestine;
