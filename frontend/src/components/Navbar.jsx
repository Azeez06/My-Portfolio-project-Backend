import { useState } from "react";
import { Link } from "react-router-dom";
import myPhoto from "../assets/myphoto.jpg"; // ✅ Profile photo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-3">
        {/* Profile Picture */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
          <img
            src={myPhoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-xl font-semibold text-blue-400">Azeez Sulaiman</h1>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden absolute right-6 top-6 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // Close (X)
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>

        {/* Menu Links */}
        <ul
          className={`${
            isOpen
              ? "flex flex-col space-y-3 mt-4 bg-gray-800 p-4 rounded-lg w-full text-center"
              : "hidden md:flex md:flex-row md:space-x-8 mt-4"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/service" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
