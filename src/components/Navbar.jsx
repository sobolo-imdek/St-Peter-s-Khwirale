// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white">
       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <h1 className="font-bold text-lg">
          St Peter’s
           Khwirale Secondary School
        </h1>
       

     
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/cbe">CBE</Link>
          <Link to="/updates">Updates</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
