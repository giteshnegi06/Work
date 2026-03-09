import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import WeddingBlog from "./Components/WeddingBlog";
import ScrollToTop from "./Components/ScrollToTop";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/wedding/:slug" element={<WeddingBlog/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
