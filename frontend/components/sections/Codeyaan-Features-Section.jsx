"use client";

import React from "react";
import { motion } from "framer-motion";
import { CodeyaanFeaturesContents } from "../../lib/content.js";

export default function CodeyaanFeaturesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Choose{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Codeyaan?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mt-4 sm:mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Learn by building real-world projects — not just watching tutorials.
            Codeyaan gives you structured learning, mentorship, and practical
            experience to become job-ready faster.
          </p>
        </motion.div>

        {/* 🔥 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {CodeyaanFeaturesContents.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-indigo-100 text-indigo-600">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}