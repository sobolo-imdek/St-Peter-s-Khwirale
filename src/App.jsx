import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import CBE from "./pages/CBE";
import Updates from "./pages/Updates";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/cbe" element={<CBE />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
