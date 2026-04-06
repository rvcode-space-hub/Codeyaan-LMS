"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { OurFeaturesContent } from "@/lib/content";

export default function OurFeaturesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Our{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need to become job-ready with structured learning and real-world experience.
          </p>
        </div>

        {/* 🔁 Feature Blocks */}
        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {OurFeaturesContent.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center"
            >
              {/* 🖼 Image */}
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`flex justify-center ${item.reverse ? "md:order-2" : ""}`}
              >
                <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 sm:-inset-2 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

                  <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden p-1.5 sm:p-2">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="rounded-lg sm:rounded-xl object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 📝 Content */}
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`text-center md:text-left ${
                  item.reverse ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                  {item.description}
                </p>

                {/* CTA */}
                <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition text-sm sm:text-base">
                  Learn More →
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}