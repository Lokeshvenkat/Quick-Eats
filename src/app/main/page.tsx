"use client";

import React, { useState } from "react";
import Navbar from "@/components/main/Navbar";
import Menu from "@/components/MenuPage/Menu";
import ProtectedRoute from "@/components/protectedroute/ProtectedRoute";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ProtectedRoute>
      <div>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Menu searchTerm={searchTerm} />
      </div>
    </ProtectedRoute>
  );
};

export default MainPage;
