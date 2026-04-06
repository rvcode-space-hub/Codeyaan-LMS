"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LearningToolsContent } from "../../lib/content";

export default function LearningToolsIntegration() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* 🔵 Logos Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 place-items-center"
        >
          {LearningToolsContent.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition flex items-center justify-center w-28 sm:w-32 md:w-40 h-20 sm:h-22 md:h-24"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={80}
                height={40}
                className="object-contain opacity-80 hover:opacity-100 transition w-full h-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 📝 Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-xs sm:text-sm tracking-widest text-indigo-500 uppercase font-semibold">
            Integrations
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 sm:mt-3 leading-tight">
            200+ tools to supercharge your{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              learning experience
            </span>
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Codeyaan integrates with modern tools and platforms to give you a
            seamless learning experience — from project building to
            collaboration and real-world workflows.
          </p>

          {/* CTA */}
          <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition text-sm sm:text-base">
            Explore Integrations →
          </button>
        </motion.div>
      </div>
    </section>
  );
}