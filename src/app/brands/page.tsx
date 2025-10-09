"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Glossier", image: "https://skinamx.com/cdn/shop/files/Capturadepantalla2024-03-23ala_s_9.49.21a.m._1024x1024@2x.png?v=1711209028", desc: "Minimal elegance and natural glow." },
  { name: "Fenty Beauty", image: "https://fentybeauty.com/cdn/shop/files/Products_GBheat_1.png?v=1676501710", desc: "Diversity meets innovation." },
  { name: "Etude House", image: "https://sourcebeauty.com/cdn/shop/files/EtudeHouse-Fixing-Tint-12-Salmon-Brick-4G-Source-Beauty-Egypt_0c348644-449b-4e56-8402-168d0754ebfa_1000x.png?v=1753099163", desc: "Playful beauty for every mood." },
  { name: "Charlotte Tilbury", image: "https://images.ctfassets.net/wlke2cbybljx/5tqte1ZWpV4qdljMRmc9Zd/6d76275219e343312aef23abfc9d5328/Bronzer_MC_MagicAway_Bundle_Packshots.png", desc: "Classic luxury with modern glamour." },
];

export default function BrandsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-pink-100 via-white to-pink-50 py-28 px-8 md:px-20 overflow-hidden">
      {/* background glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-[url('/textures/glow-pattern.png')] bg-cover bg-center"
      />

      {/* heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-5xl font-extrabold text-gray-900 mb-16"
      >
        Our Signature Brands
      </motion.h1>

      {/* grid of brands */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {brands.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col items-center text-center border border-pink-200 hover:border-pink-400 transition"
          >
            {/* image container fixed height */}
            <div className="w-32 h-32 mb-4 flex items-center justify-center">
              <Image
                src={b.image}
                alt={b.name}
                width={128}
                height={128}
                className="object-contain"
              />
            </div>

            {/* text */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{b.name}</h3>
            <p className="text-gray-600 text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
