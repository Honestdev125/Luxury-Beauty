"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaStore, FaGift, FaStar, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

const navLinks = [
  { name: "Home", icon: <FaHome />, href: "/" },
  { name: "Brands", icon: <FaStore />, href: "/brands" },
  { name: "Products", icon: <FaGift />, href: "/products" },
  { name: "Testimonials", icon: <FaStar />, href: "/testimonials" },
  { name: "Contact", icon: <FaEnvelope />, href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // handler برای کلیک روی لینک موبایل
  const handleMobileLinkClick = () => {
    setMenuOpen(false); // منو رو می‌بندیم
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-900">LuxuryBeauty</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 transition font-medium ${
                pathname === link.href ? "text-pink-600" : "text-gray-800 hover:text-pink-600"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/95 flex flex-col items-center gap-4"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={handleMobileLinkClick} 
            className={`flex items-center gap-2 text-gray-800 hover:text-pink-600 transition font-medium text-lg ${
              pathname === link.href ? "text-pink-600" : ""
            }`}
          >
            {link.icon} {link.name}
          </Link>
        ))}
      </motion.div>
    </header>
  );
}
