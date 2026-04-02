"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureHighlightSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Everything you can learn offline,{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              you can master with Codeyaan
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Codeyaan is a modern learning platform that helps you build real-world
            skills through structured roadmaps, hands-on projects, and mentorship —
            all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition">
              🚀 Start Learning
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
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
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>

          {/* Image Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-3">
          
            <Image
              src="/Group 17.svg"
              alt="Codeyaan Learning"
              width={500}
              height={350}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Floating UI Element 1 */}
          <div className="absolute top-6 left-6 bg-white shadow-lg px-4 py-2 rounded-xl text-sm font-medium">
            📚 Live Classes
          </div>

          {/* Floating UI Element 2 */}
          <div className="absolute bottom-6 right-6 bg-white shadow-lg px-4 py-2 rounded-xl text-sm font-medium">
            🎯 Real Projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}