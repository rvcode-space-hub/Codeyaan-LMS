"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { LearnerReviewsContent } from "@/lib/content";

export default function LearnerReviewsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
        
        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-xs sm:text-sm tracking-widest text-indigo-500 uppercase font-semibold">
            Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 leading-tight">
            What Our{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Learners Say
            </span>
          </h2>

          <p className="text-gray-400 mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Thousands of students trust Codeyaan to build real-world skills and
            grow their careers. Here’s what they have to say.
          </p>

          {/* CTA */}
          <button className="mt-5 sm:mt-6 md:mt-8 flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl bg-indigo-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition mx-auto md:mx-0">
            Share Your Experience
            <ChevronRight size={18} />
          </button>
        </motion.div>

        {/* 🖼 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glow Background */}
          <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-2xl opacity-20"></div>

          {/* User Reviews */}
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-[400px] sm:h-[440px] md:h-[480px] lg:h-[520px]">
            {LearnerReviewsContent.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 80,
                  scale: index === currentIndex ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${
                  index === currentIndex
                    ? "z-10"
                    : "z-0 pointer-events-none"
                }`}
              >
                {/* Image */}
                <Image
                  src={review.imageUrl}
                  alt={review.name}
                  width={360}
                  height={440}
                  className="rounded-xl sm:rounded-2xl object-cover shadow-2xl w-full h-full"
                />

                {/* Review Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    y: index === currentIndex ? 0 : 40,
                  }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-[-55px] sm:bottom-[-50px] md:-bottom-20 lg:-bottom-24 left-1/2 -translate-x-1/2 bg-white p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl shadow-xl w-[95%] sm:w-[90%]"
                >
                  <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">
                    {review.review}
                  </p>

                  <div className="mt-2 sm:mt-3 md:mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-900">
                        {review.name}
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                        {review.role}
                      </p>
                    </div>

                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* ⬅ LEFT ARROW */}
          <div
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? LEARNER_REVIEWS.length - 1 : prev - 1
              )
            }
            className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-2.5 md:p-3 cursor-pointer hover:scale-110 transition z-20"
          >
            <ChevronLeft className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* ➡ RIGHT ARROW */}
          <div
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === LEARNER_REVIEWS.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-2.5 md:p-3 cursor-pointer hover:scale-110 transition z-20"
          >
            <ChevronRight className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}