"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-28 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest text-indigo-500 uppercase font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Learners Say
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Thousands of students trust Codeyaan to build real-world skills and
            grow their careers. Here’s what they have to say.
          </p>

          {/* CTA */}
          <button className="mt-8 flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition">
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
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>

          {/* Main Image */}
          <div className="relative">
            <Image
              src="/testimonial.png"
              alt="Student"
              width={360}
              height={440}
              className="rounded-3xl object-cover shadow-2xl"
            />

            {/* Floating Review Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl w-[320px]"
            >
              <p className="text-sm text-gray-600 leading-relaxed">
                “Codeyaan helped me build real-world projects and gain confidence.
                The structured roadmap made learning super easy.”
              </p>

              {/* User */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Ravi Kumar
                  </p>
                  <p className="text-xs text-gray-400">
                    Full Stack Learner
                  </p>
                </div>

                {/* ⭐ Stars */}
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ➡ Floating Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 cursor-pointer hover:scale-110 transition">
            <ChevronRight className="text-gray-600" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}