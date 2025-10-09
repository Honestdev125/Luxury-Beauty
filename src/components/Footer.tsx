"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold">LuxuryBeauty</h2>
      <p className="text-gray-300">© 2025 LuxuryBeauty. All rights reserved.</p>

      {/* Social Icons */}
      <div className="flex gap-6 text-xl">
        <a href="#" className="hover:text-pink-500 transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
        <a href="#" className="hover:text-pink-500 transition"><FaTwitter /></a>
        <a href="#" className="hover:text-pink-500 transition"><FaYoutube /></a>
      </div>
    </footer>
  );
}
