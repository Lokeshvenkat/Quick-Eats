"use client";

import dynamic from "next/dynamic";
import Cart from "@/components/cart/CartPage";

const CartPage = dynamic(() => import("@/components/cart/CartPage"), {
  ssr: false, 
});

export default function CartPageWrapper() {
  return <Cart />;
}
