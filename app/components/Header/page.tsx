"use client"
import "../../css/header.css"
import React, { useRef, useState, useEffect } from "react"
import { Button, CircularProgress } from "@mui/material"
import { Person, ShoppingCart, Menu, Close, Logout } from "@mui/icons-material"
import Image from "next/image"
import logo from "../../../public/pngwing.com.png"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { toggleUIcart } from "@/app/Redux/Cart/cartUIslice"
import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Rootstate } from "@/app/Redux/store"

const Nav = () => {
 const { user } = useKindeBrowserClient()
 const totalQuantity = useSelector((state: Rootstate) => state.cart.totalQuantity)
 const [active, setActive] = useState("active")
 const [loading, setLoading] = useState(true)
 const sidenav = useRef<HTMLDivElement>(null)
 const dispatch = useDispatch()
 const toggleUIcartaction = () => dispatch(toggleUIcart())
 const toggleMenu = () => {
  sidenav.current?.classList.toggle("mainparent")
 }

 useEffect(() => {
  const timer = setTimeout(() => {
   setLoading(false) // Set loading to false after 1 second
  }, 1000)

  return () => clearTimeout(timer) // Cleanup timer on unmount
 }, [])

 return (
  <div className="container header flex justify-around items-center flex-wrap gap-y-10 flex-col sm:flex-row gap-x-5 w-[100%]">
   {/* logo */}
   <div className="logo flex justify-center items-center flex-col flex-1">
    <Link onClick={() => setActive("home")} href={"/"}>
     <Image src={logo} width={60} height={60} alt="image" />
    </Link>
    <h1 className="text-slate-700">
     <Link href={"/"}>palestino</Link>
    </h1>
   </div>
   {/* middle / mobile nav  */}
   <div ref={sidenav} className="middle">
    <div className="main flex items-center justify-evenly gap-x-10 text-xl flex-1">
     <button onClick={toggleMenu} className="close-menue hidden !absolute left-2 top-2">
      <Close fontSize="medium" className="close" sx={{ color: "tomato" }} />
     </button>
     <Link href={"/"}>
      <p onClick={() => setActive("home")} className={active === "home" ? "active" : ""}>
       Home
      </p>
     </Link>
     <Link href={"/menu"}>
      <p onClick={() => setActive("menu")} className={active === "menu" ? "active" : ""}>
       menu
      </p>
     </Link>
     <Link href={"/mycart"}>
      <p onClick={() => setActive("cart")} className={active === "cart" ? "active" : ""}>
       cart
      </p>
     </Link>
    </div>
   </div>
   {/* last nav */}
   <div className="last flex flex-1 items-center justify-center gap-x-3">
    {user ? (
     loading ? (
      <CircularProgress size={40} sx={{ color: "tomato" }} />
     ) : (
      <div className="flex  flex-col-reverse md:flex-row  items-center gap-4 text-center">
       <div>
        <h4 style={{ color: "#1f224e" }}> {user.given_name}</h4>
       </div>
       <div className="img h-[40px] w-[40px]">
        <Image className="user-img" fill alt="" src={user?.picture || "image"} />
       </div>
      </div>
     )
    ) : (
     <LoginLink>
      <Person sx={{ color: "#1f3553" }} fontSize="large" />
     </LoginLink>
    )}

    <Button onClick={toggleUIcartaction} className="basket">
     <ShoppingCart sx={{ color: "#1f3553" }} className="relative" fontSize="large"></ShoppingCart>
     <div className="dot">{totalQuantity}</div>
    </Button>
    <Button onClick={toggleMenu} className="hidden toggle-mob  ">
     <Menu fontSize="large" sx={{ color: "#1f3553" }} />
    </Button>
    {user && (
     <button>
      <LogoutLink className="logout">
       {" "}
       <Logout fontSize="large" />
      </LogoutLink>
     </button>
    )}
   </div>
  </div>
 )
}

export default Nav
