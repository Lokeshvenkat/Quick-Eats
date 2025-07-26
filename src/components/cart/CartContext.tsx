"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
   image: string;

}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  cartCount: number;
    clearCart: () => void;
    updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
 

const addToCart = (item: CartItem) => {
  setCart((prev) => {
    const existing = prev.find((i) => i.id === item.id);
    if (existing) {
      const updatedQuantity = Math.min(existing.quantity + item.quantity, 10);
      return prev.map((i) =>
        i.id === item.id ? { ...i, quantity: updatedQuantity } : i
      );
    } else {
      return [...prev, { ...item }];
    }
  });
};

  const clearCart = () => {
  setCart([]); 
};

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1 || quantity > 10) return;
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity } : item
    )
  );
};

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount,clearCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
