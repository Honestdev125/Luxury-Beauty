"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-28 px-8 md:px-20 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('/textures/soft-pattern.png')] bg-cover opacity-10"></div>

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-5xl font-extrabold text-gray-900 mb-16"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-pink-200 hover:border-pink-400 transition-all"
      >
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Optional contact info */}
      <div className="relative z-10 mt-16 text-center text-gray-700">
        <p>Email: <span className="font-semibold">info@luxurybeauty.com</span></p>
        <p>Phone: <span className="font-semibold">+1 234 567 890</span></p>
      </div>
    </main>
  );
}
