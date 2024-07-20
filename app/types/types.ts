import { StaticImageData } from "next/image";
export interface CartItemsTypes {
    id: string;
    title: string;
    image01: StaticImageData;
    price: number;
    quantity: number;
    totalprice: number;
   }
   export interface CartItemDispatch {
    id: string;
    title: string;
    image01: StaticImageData;
    price: number;
   }
   export interface InitialState {
    cartItems: CartItemsTypes[];
    totalQuantity: number;
    totalPrice: number;
   }

  export interface ProductCardProps {
    id: string;
    title: string;
    image01: StaticImageData;
    price: number;
  
  }