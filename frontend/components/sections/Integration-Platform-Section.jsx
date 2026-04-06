"use client";

import React from "react";
import { motion } from "framer-motion";
import { IntegrationPlatformContent } from "@/lib/content";

export default function IntegrationPlatformSection() {
  return (
    <section className="py-14 sm:py-16 md:py-18 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            All-in-One{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Learning Platform
            </span>
          </h2>

          <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Codeyaan is a unified platform that blends structured education, real-world product development, and mentorship to fast-track your career growth.
          </p>
        </motion.div>

      {/* 💳 Cards */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

  {IntegrationPlatformContent.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
    >
      
      {/* Glass Card */}
      <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-md group-hover:shadow-2xl transition duration-500">

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-xl" />

        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition duration-500">
          {React.cloneElement(item.icon, {
            className: "w-6 h-6"
          })}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* 🔥 Bottom Hover Line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />

      </div>
    </motion.div>
  ))}

</div>

      </div>
    </section>
  );
}