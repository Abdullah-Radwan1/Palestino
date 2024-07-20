import React from "react"
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"
const not_found = () => {
 return (
  <div className=" h-[62%] flex justify-center items-center">
   <h1 className="text-center ">
    Sorry, but we can't find this page <SentimentVeryDissatisfiedIcon fontSize="large" sx={{ color: "tomato" }} />
   </h1>
  </div>
 )
}

export default not_found
