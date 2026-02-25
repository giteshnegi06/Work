import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
        <Footer /> */}
      </BrowserRouter>
    </>
  );
}
