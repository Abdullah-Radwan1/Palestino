"use client";
import "../css/commonSection.css";
import "../css/products.css";
import products from "@/app/assets/productsData";
import Image from "next/image";
import ProductCard from "../components/UI/ProductCard";
import banner from "../../public/banner.jpg";
import { Input } from "@mui/material";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const CommonSection = () => {
 // Sorting and filtering variables
 const [searchTerm, setSearchTerm] = useState("");
 const [sortOption, setSortOption] = useState("default");

 // Sorting logic
 interface ProductCompare {
  title: string;
  price: number;
 }

 const handleSort = (a: ProductCompare, b: ProductCompare) => {
  switch (sortOption) {
   case "high-price":
    return b.price - a.price;
   case "low-price":
    return a.price - b.price;
   case "descending":
    return b.title.localeCompare(a.title);
   case "ascending":
    return a.title.localeCompare(b.title);
   default:
    return 0;
  }
 };

 // Pages variables
 const [pages, setPages] = useState(0);
 const productPerPage = 5;
 const visitedPage = pages * productPerPage; // indicates the index of the first product to show in the next page

 // Apply filtering and sorting before pagination
 const filteredProducts = products
  .filter((product) => {
   if (searchTerm === "") {
    return true; // Include all products if search term is empty
   }
   // makes sure that the word and the titel of the products are all lowerCase
   return product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  })
  .sort(handleSort);

 const displayPage = filteredProducts.slice(visitedPage, visitedPage + productPerPage);
 const pageCount = Math.ceil(filteredProducts.length / productPerPage);
 const changepage = ({ selected }: { selected: number }) => {
  setPages(selected);
 };

 return (
  <>
   <div className="common-section">
    <div className="img banner-parent">
     <Image className="banner" src={banner} alt="" />
    </div>
    <div className="inputs container flex justify-between">
     {/* Input for filtering */}
     <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="searching for..."
     />
     {/* Sorting options */}
     <div className="sorting">
      <select onChange={(e) => setSortOption(e.target.value)}>
       <option value="default">default</option>
       <option value="high-price">High Price</option>
       <option value="low-price">Low Price</option>
       <option value="descending">A-Z</option>
       <option value="ascending">Z-A</option>
      </select>
     </div>
    </div>
    {/* Products */}

    <div className="container all-products">
     {filteredProducts.length === 0
      ? "this product is not found"
      : displayPage.map((product) => (
         <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image01={product.image01}
          price={product.price}
         />
        ))}
    </div>
   </div>
   <ReactPaginate
    containerClassName="paginate"
    pageCount={pageCount}
    onPageChange={changepage}
    previousLabel={"Prev"}
    nextLabel={"Next"}
   />
  </>
 );
};

export default CommonSection;
