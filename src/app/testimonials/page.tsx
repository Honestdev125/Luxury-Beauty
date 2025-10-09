"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    text: "Amazing products! Luxurious feel and quality.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Emily Smith",
    text: "I love the elegance and style of this brand!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Sophia Brown",
    text: "The products exceeded my expectations. Absolutely stunning!",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Olivia Johnson",
    text: "Beautiful textures and long-lasting quality. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 py-28 px-8 md:px-20 overflow-hidden">
      {/* Background decorative blur */}
      <div className="absolute inset-0 bg-[url('/textures/soft-blur.jpg')] bg-cover opacity-10"></div>

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-5xl font-extrabold text-gray-900 mb-16"
      >
        What Our Customers Say
      </motion.h1>

      {/* Testimonials Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="group relative p-8 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-purple-200 hover:border-purple-400 transition-all"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full object-cover border-2 border-purple-300"
              />
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
            </div>
            {/* Quote */}
            <p className="text-gray-700 italic text-lg">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
