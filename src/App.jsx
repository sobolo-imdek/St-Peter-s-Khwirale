import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import CBE from "./pages/CBE";
import Updates from "./pages/Updates";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import SiteContentWarmup from "./components/SiteContentWarmup";

export default function App() {
  return (
    <>
      <SiteContentWarmup />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/cbe" element={<CBE />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}
