import React, { useEffect, useRef, useState } from "react";
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;

    // Smooth GSAP entrance animation
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 
      bg-white/30 backdrop-blur-lg shadow-md border-b border-white/20 transition-all duration-500"
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="FurniHome Logo"
          className="w-9 h-9 object-cover drop-shadow-md"
        />
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">
          Furni<span className="text-yellow-600">Home</span>
        </h1>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-10 text-lg font-medium text-gray-800">
        <li className="cursor-pointer hover:text-yellow-600 transition-all duration-300">Home</li>
        <li className="cursor-pointer hover:text-yellow-600 transition-all duration-300">Shop</li>
        <li className="cursor-pointer hover:text-yellow-600 transition-all duration-300">About</li>
        <li className="cursor-pointer hover:text-yellow-600 transition-all duration-300">Contact</li>
      </ul>

      {/* Icons Section */}
      <div className="hidden md:flex items-center space-x-6 text-xl text-gray-800">
        <FaSearch className="cursor-pointer hover:text-yellow-600 transition-all duration-300" />
        <FaUser className="cursor-pointer hover:text-yellow-600 transition-all duration-300" />
        <FaShoppingCart className="cursor-pointer hover:text-yellow-600 transition-all duration-300" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-800 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white/40 backdrop-blur-lg shadow-lg md:hidden 
        flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-900 
        transition-all duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <li className="list-none cursor-pointer hover:text-yellow-600">Home</li>
        <li className="list-none cursor-pointer hover:text-yellow-600">Shop</li>
        <li className="list-none cursor-pointer hover:text-yellow-600">About</li>
        <li className="list-none cursor-pointer hover:text-yellow-600">Contact</li>

        <div className="flex space-x-6 text-xl mt-3">
          <FaSearch className="cursor-pointer hover:text-yellow-600" />
          <FaUser className="cursor-pointer hover:text-yellow-600" />
          <FaShoppingCart className="cursor-pointer hover:text-yellow-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
