// src/components/MobileMenu.jsx
import { Link } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-green-800 text-white px-4 py-6 space-y-4">
      <Link onClick={onClose} to="/">Home</Link>
      <Link onClick={onClose} to="/about">About</Link>
      <Link onClick={onClose} to="/academics">Academics</Link>
      <Link onClick={onClose} to="/cbe">CBE</Link>
      <Link onClick={onClose} to="/updates">Updates</Link>
      <Link onClick={onClose} to="/contact">Contact</Link>

      <button
        onClick={onClose}
        className="block mt-4 text-sm underline"
      >
        Close
      </button>
    </div>
  );
}
