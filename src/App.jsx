import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";

/* Pages */
import HomePage from "./pages/HomePage.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;