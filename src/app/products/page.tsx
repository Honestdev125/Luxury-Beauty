"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Velvet Glow Foundation",
    image: "https://static.elle.de/0x648:1534x1511/2400x1350/images/2017-05/fullsizerender.jpg",
    desc: "Seamless coverage with a radiant, natural finish.",
  },
  {
    name: "Crystal Shine Lip Gloss",
    image: "https://www.oulaccosmetics.com/cdn/shop/files/crystal-shine-gloss-c08-glamorize-02-product.jpg?v=1719475493&width=3000",
    desc: "Glossy perfection enriched with vitamin E.",
  },
  {
    name: "Dream Blush Compact",
    image: "https://coffeeandmakeup.com/wp-content/uploads/2023/12/natasha-denona-my-mini-dream-glow-blush-comparison-highlighters-labeled.jpg",
    desc: "Add a subtle glow that lasts all day.",
  },
  {
    name: "Midnight Eyeshadow Palette",
    image: "https://tintark.com/cdn/shop/files/1-1_8ac53073-2370-4705-b90a-fc3757362546.jpg?v=1740134457&width=1445",
    desc: "A palette inspired by moonlit elegance.",
  },
];

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-rose-100 via-white to-rose-50 py-28 px-8 md:px-20 overflow-hidden">
      {/* Background aesthetic blur */}
      <div className="absolute inset-0 bg-[url('/textures/soft-blur.jpg')] bg-cover opacity-10"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-5xl font-extrabold text-gray-900 mb-16"
      >
        Our Signature Products
      </motion.h1>

      {/* Products Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-rose-200 hover:border-rose-400 transition-all"
          >
            {/* Image */}
            <div className="h-[350px] w-full relative overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40"
              >
                <h2 className="text-2xl font-bold">{p.name}</h2>
                <p className="mt-2 text-sm max-w-xs">{p.desc}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
