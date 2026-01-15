// src/components/MobileMenu.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../data/navLinks";

export default function MobileMenu({ open, onClose }) {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (title) => {
    setExpandedMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white text-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-gray-100">
          <span className="font-bold text-lg text-school-primary">Menu</span>
          <button
            onClick={onClose}
            className="rounded-md p-2 -mr-2 text-gray-400 hover:text-school-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-school-primary"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <div key={link.title} className="flex flex-col">
              {link.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(link.title)}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:bg-gray-50 hover:text-school-primary px-3 py-2 rounded-md transition-colors text-left"
                  >
                    {link.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-200 text-gray-500 ${expandedMenus[link.title] ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Submenu Items */}
                  {expandedMenus[link.title] && (
                    <div className="flex flex-col pl-4 space-y-1 mt-1 border-l-2 border-gray-100 ml-3 bg-white">
                      {link.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.title}
                          onClick={onClose}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `text-base text-gray-700 py-2 px-2 rounded-md block transition-colors ${isActive
                              ? "text-school-primary bg-gray-50 font-bold"
                              : "font-normal hover:text-school-primary hover:bg-gray-50"
                            }`
                          }
                        >
                          {subItem.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  onClick={onClose}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium px-3 py-2 rounded-md transition-colors ${isActive
                      ? "text-school-primary bg-gray-50 font-bold"
                      : "text-gray-900 hover:bg-gray-50 hover:text-school-primary"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
