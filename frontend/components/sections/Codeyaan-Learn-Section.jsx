"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CodeyaanLearnSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Everything you can learn offline,{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              you can master with Codeyaan
            </span>
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Codeyaan is a modern learning platform that helps you build real-world
            skills through structured roadmaps, hands-on projects, and mentorship —
            all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition">
              🚀 Start Learning
            </button>

            <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white border border-blue-500 font-medium cursor-pointer hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* 🖼 RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glow Background */}
          <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-2xl opacity-20"></div>

          {/* Image Card */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-2 sm:p-3">
            <Image
              src= "https://res.cloudinary.com/dgmzre11v/image/upload/v1775496853/CodeYaan/images/image_1775496850816.png"
              alt="Codeyaan Learning"
              width={500}
              height={350}
              className="rounded-xl sm:rounded-2xl object-cover w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

          {/* Floating UI Element 1 */}
          <div className="absolute top-3 sm:top-6 left-3 sm:left-6 bg-white shadow-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium">
            📚 Live Classes
          </div>

          {/* Floating UI Element 2 */}
          <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 bg-white shadow-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium">
            🎯 Real Projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}