"use client"
import React from "react"
import Image from "next/image" // Adjust the import if you are using a different Image component
import { useDispatch } from "react-redux"
import { addProduct } from "@/app/Redux/Cart/cartSlice"
import Link from "next/link"
import { ProductCardProps } from "@/app/types/types"

const ProductCard: React.FC<ProductCardProps> = ({ id, title, image01, price }) => {
 const dispatch = useDispatch()
 const addToCart = () => dispatch(addProduct({ id, title, price, image01 }))

 return (
  <div className="product" key={id}>
   <div className="img-title flex flex-col items-center text-center">
    <div className="img w-40">
     <Link href={`/menu/${id}`}>
      {" "}
      <Image className="m-auto" width={160} height={160} src={image01} alt={title} />
     </Link>
    </div>
    <div className="title">
     <h3>
      {" "}
      <Link href={`/menu/${id}`}>{title}</Link>
     </h3>
    </div>
   </div>

   <div className="price-add mt-5 px-6 items-center">
    <div className="price">{price}$</div>
    <button onClick={addToCart}>Add to cart</button>
   </div>
  </div>
 )
}

export default ProductCard
