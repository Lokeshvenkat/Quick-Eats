"use client";

import React from "react";
import Navbar from "./Navbar";
import Menu from "../MenuPage/Menu";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Menu/>
    </div>
  );
};

export default MainPage;
