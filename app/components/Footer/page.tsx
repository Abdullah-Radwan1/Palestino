import React from "react"
import "../../css/footer.css"
import Image from "next/image"
import logo from "../../../public/pngwing.com.png"
import { Input } from "@mui/material"
const Footer = () => {
 return (
  <div className="parent">
   <footer>
    {/* firstcolumn  */}
    <div className="col firstcolumn  flex-col gap-y-2 relative top-0 ">
     <div className=" flex justify-center  flex-col   flex-1  ">
      <div className="text-slate-700">
       {" "}
       <h2>palestino</h2>{" "}
      </div>
      <div className="relative logo">
       <Image src={logo} fill alt="image" />
      </div>
     </div>
     <div className="text">
      {" "}
      <p>The best food in the world is found here, Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>{" "}
     </div>
    </div>
    {/* secondcolumn  */}
    <div className="col delivery  ">
     {" "}
     <h2>Delivery days</h2>{" "}
     <div>
      {" "}
      <h3>Sunday-Thursday</h3>
      <p>10:00am-11:00pm</p>{" "}
     </div>{" "}
     <div>
      <h3>friday-saturday</h3> <p>off days</p>
     </div>{" "}
    </div>
    {/* thirdcolumn  */}
    <div className="col contact  ">
     <h2>Contact</h2>
     <p>location:21 shoubra street, Cairo Egypt </p> <p>01110975185</p> <p>badaBeedo@gami.com</p>
    </div>
    {/* fourthcolumn  */}
    <div className="col email ">
     <div>
      <h2>Subscribe</h2> <p>subscribe to us now</p>
     </div>{" "}
     <div className="input">
      {" "}
      <Input placeholder="enter your Email"></Input>{" "}
     </div>
    </div>
   </footer>
  </div>
 )
}

export default Footer
