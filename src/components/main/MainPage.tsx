"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "../MenuPage/Menu";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchQuery} />
      <Menu searchTerm={searchQuery} />
    </div>
  );
};

export default MainPage;
