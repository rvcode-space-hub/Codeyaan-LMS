"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Learning Interface",
    description:
      "Clean and distraction-free UI designed for focused learning and better productivity.",
    image: "/Group 71.svg",
  },
  {
    title: "Hands-on Projects",
    description:
      "Learn by building real-world projects with guided instructions and mentorship.",
    image: "/Group 92.svg",
    reverse: true,
  },
  {
    title: "Assessments & Quizzes",
    description:
      "Track your progress with quizzes, tests, and real-time performance analytics.",
    image: "/feature3.png",
  },
  {
    title: "Course Management",
    description:
      "Manage courses, content, and students efficiently with powerful tools.",
    image: "/feature4.png",
    reverse: true,
  },
  {
    title: "1-on-1 Mentorship",
    description:
      "Get personal guidance, doubt-solving sessions, and feedback from mentors.",
    image: "/feature5.png",
  },
];

export default function ProductFeaturesShowcaseSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Everything you need to become job-ready with structured learning and real-world experience.
          </p>
        </div>

        {/* 🔁 Feature Blocks */}
        <div className="space-y-28">
          {features.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center`}
            >
              {/* 🖼 Image */}
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`flex justify-center ${
                  item.reverse ? "md:order-2" : ""
                }`}
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="rounded-xl object-cover"
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
                className={`${item.reverse ? "md:order-1" : ""}`}
              >
                <h3 className="text-3xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* CTA */}
                <button className="mt-6 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition">
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