"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

interface MenuProps {
  searchTerm: string;
}

const Menu = ({ searchTerm }: MenuProps) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        setMenu(data);
      } catch (error) {
        console.error("No items found! Please try again later.");
        return;
      }
    };
    fetchMenu();
  }, [searchTerm, menu]);

  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleQuantityChange = (id: number, delta: number) => {
  setQuantities((prev) => {
    const currentQty = prev[id] ?? 1; 
    const newQty = currentQty + delta;
    return {
      ...prev,
      [id]: Math.max(1, Math.min(newQty, 10)), 
    };
  });
};


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMenu.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              <div className="flex justify-between mt-2 text-sm">
                <span className="font-bold text-green-600 dark:text-green-400">
                  ₹{item.price}
                </span>
                <span className="text-yellow-500">⭐ {item.rating}</span>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
              >
                -
              </button>
              <span className="w-6 text-center">
                {quantities[item.id] || 1}
              </span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                 disabled={(quantities[item.id] || 1) >= 10}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
              >
                +
              </button>
              <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              onClick={() =>
              addToCart({
              id: item.id.toString(),
              name: item.name,
              price: item.price,
              quantity: Math.min(quantities[item.id] || 1, 10),
              image:item.image, 
    })
  }
                >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
