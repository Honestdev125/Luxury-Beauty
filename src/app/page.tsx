"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const brands = [
  {
    name: "Glossier",
    image:
      "https://images.squarespace-cdn.com/content/v1/596ce3c8cd0f68df1fd7598e/6a63bd04-2c3e-40d6-895b-4de2080997fb/best-glossier-products-space-nk.jpg",
  },
  {
    name: "Fenty Beauty",
    image:
      "https://www.cultbeauty.com/images?url=https://static.thcdn.com/widgets/257-en/27/original-FOUNDATION_2-122127.jpg&format=webp&auto=avif&width=330&height=auto&fit=crop",
  },
  {
    name: "Etude House",
    image:
      "https://sifo.ru/image/cache/catalog/products/etude-house/ochishayushaya-penka-etude-house-berry-aha-bright-peel-bubble-wash/ochishayushaya-penka-etude-house-berry-aha-bright-peel-bubble-wash-95241-700x700.jpg",
  },
];

const products = [
  {
    name: "Pink Lipstick",
    image:
      "https://www.debellecosmetix.com/cdn/shop/files/DeBelle_Long_Lasting_Pink_Lipstick_Vivid_Valerie_800x.jpg?v=1755280268",
    description: "Soft and vibrant pink lipstick.",
  },
  {
    name: "Eyeshadow Palette",
    image:
      "https://viragobabe.com/cdn/shop/files/2U5A8897copysmall.jpg?v=1693351142&width=2048",
    description: "Shimmering eyeshadow palette for all occasions.",
  },
  {
    name: "Blush Compact",
    image:
      "https://images.squarespace-cdn.com/content/v1/541d14f8e4b09246971df445/1598263169056-M6PL9MBU54RNAH4838ND/suqqu-blush-compact-101-review-4.jpg",
    description: "Add a touch of color to your cheeks.",
  },
];

const testimonials = [
  { name: "Jane Doe", text: "Amazing products! Luxurious feel and quality." },
  { name: "Emily Smith", text: "I love the elegance and style of this brand!" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative h-[750px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://yourimageshare.com/ib/oDLAPvEbRl.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Experience True Luxury in Beauty
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl mb-8 max-w-xl"
          >
            Premium cosmetics and timeless elegance. Explore our curated
            collection.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #ffb6c1" }}
            className="bg-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-lg"
          >
            Explore Collection
          </motion.button>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Prestigious Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              className="relative group rounded-xl overflow-hidden shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl font-bold">{brand.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Products */}
      <section id="products" className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Featured Products
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          autoplay={{ delay: 4000 }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <motion.div className="relative group rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-2xl font-bold">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative py-24 px-6 md:px-20 bg-gradient-to-r from-pink-50 to-purple-50 overflow-hidden"
      >
        {/* subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/glow-pattern.png')] bg-cover pointer-events-none"></div>

        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900"
        >
          What Our Customers Say
        </motion.h2>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
              }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 flex flex-col items-start text-left shadow-xl transition-all"
            >
              <span className="text-3xl text-pink-500 mb-4">“</span>
              <p className="text-gray-800 italic mb-6">{t.text}</p>
              <p className="mt-auto font-semibold text-gray-900">- {t.name}</p>
            </motion.div>
          ))}
        </div>

        {/* subtle floating decorative circles */}
        <div className="absolute top-10 left-5 w-6 h-6 bg-pink-200 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-10 h-10 bg-purple-200 rounded-full opacity-15 animate-bounce-slow delay-2000"></div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-20 relative overflow-hidden bg-gradient-to-br from-pink-500 to-pink-600 text-white text-center">
        {/* subtle background glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#ffffff,_transparent)] pointer-events-none"></div>

        {/* heading & description */}
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold mb-4"
        >
          Stay in the Loop
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mb-10 max-w-xl mx-auto text-lg md:text-xl"
        >
          Subscribe to get exclusive beauty updates, tips, and new collections
          straight to your inbox.
        </motion.p>

        {/* input + button glass container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/20 backdrop-blur-lg rounded-full p-2 sm:p-1 shadow-lg max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-4 rounded-full text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(255,182,193,0.5)",
            }}
            className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-6 py-4 rounded-full transition-all duration-300"
          >
            Subscribe
          </motion.button>
        </motion.div>

        {/* subtle floating bubbles */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-white/10 rounded-full animate-bounce-slow delay-2000"></div>
      </section>
    </div>
  );
}
