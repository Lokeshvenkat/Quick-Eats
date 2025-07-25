"use client";

import React, { useState } from "react";
import Navbar from "@/components/main/Navbar";
import Menu from "@/components/MenuPage/Menu";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Menu searchTerm={searchTerm} />
    </div>
  );
};

export default MainPage;
