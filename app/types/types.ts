import { StaticImageData } from "next/image";
export interface CartItem {
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
    cartItems: CartItem[];
    totalQuantity: number;
    totalPrice: number;
   }