"use client";

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { useCart } from "@/components/cart/CartContext";
import { useRouter } from "next/navigation";

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const [isDark, setIsDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cartCount } = useCart();
  const router = useRouter();



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="text-xl font-bold text-black dark:text-white">
        QuickEats
      </div>

      <div className="w-[40%]">
        <input
          type="text"
          placeholder="Search for dishes..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-full focus:outline-none text-white"
        />
      </div>

      <div className="flex items-center space-x-6" onClick={() => router.push("/cart")}>
        {/* Cart Icon with count */}
        <div className="relative cursor-pointer">
          <BsCart className="text-xl text-gray-700 dark:text-white" />
           {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
          </span>
           )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {isDark ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-violet-700" />
          )}
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FiUser className="text-lg text-gray-700 dark:text-white" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Orders
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
