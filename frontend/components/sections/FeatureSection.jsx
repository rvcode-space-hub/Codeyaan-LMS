"use client";

import React from "react";
import { BookOpen, Laptop, Award, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureSection() {
  const features = [
    {
      title: "Structured Learning",
      description:
        "Step-by-step roadmap from beginner to advanced with clarity.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Hands-on Projects",
      description:
        "Build real-world applications to gain practical experience.",
      icon: <Laptop className="w-6 h-6" />,
    },
    {
      title: "Certifications",
      description:
        "Showcase your skills with industry-recognized certificates.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "AI Learning",
      description:
        "Personalized AI-powered learning to boost your growth.",
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Codeyaan?
            </span>
          </h2>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
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
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 text-indigo-600">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
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