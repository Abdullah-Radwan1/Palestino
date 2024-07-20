import type { Metadata } from "next"
import Nav from "./components/Header/page"
import { RocknRoll_One } from "@next/font/google"
import "./globals.css"
import Footer from "./components/Footer/page"
import Providers from "./Redux/Provider"
import Carts from "./components/UI/cart/SideCart"
import NextTopLoader from "nextjs-toploader"
import ProductCard from "./components/UI/ProductCard"

const RocknRoll = RocknRoll_One({
 subsets: ["latin"],
 variable: "--myfont2",
 weight: ["400"],
})

export const metadata: Metadata = {
 title: "Palestino App",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return (
  <Providers>
   <html>
    <body className={RocknRoll.className}>
     <NextTopLoader color="tomato" />
     <Carts />
     <Nav />
     {children}
     <Footer />
    </body>
   </html>
  </Providers>
 )
}
