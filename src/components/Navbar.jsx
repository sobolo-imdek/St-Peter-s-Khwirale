// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm text-school-maroon">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center h-16">

        <Link to="/" className="font-bold text-lg md:text-2xl leading-tight text-school-maroon tracking-tight">
          St Peter's <br className="hidden md:inline" />
          <span className="md:inline block text-gray-800">Khwirale <span className="hidden sm:inline">Senior School</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center font-medium">
          {navLinks.map((link) => (
            <div key={link.title} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors py-2 block flex items-center gap-1 ${isActive ? "text-school-maroon-light font-bold border-b-2 border-school-maroon-light" : "hover:text-school-maroon-light"
                  }`
                }
              >
                {link.title}
                {link.submenu && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {link.submenu && (
                <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 pt-2">
                  <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1">
                      {link.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.title}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition-colors ${isActive
                              ? "bg-school-background text-school-maroon font-bold"
                              : "text-gray-700 hover:bg-school-background hover:text-school-maroon"
                            }`
                          }
                        >
                          {subItem.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-gray-100 text-school-maroon focus:outline-none focus:ring-2 focus:ring-inset focus:ring-school-maroon"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
