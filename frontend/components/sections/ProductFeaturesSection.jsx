"use client";

import React from "react";
import { Calendar, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductFeaturesSection() {
  const features = [
    {
      title: "Smart Course Management",
      description:
        "Manage courses, modules, and student progress with a structured system.",
      icon: <FileText />,
    },
    {
      title: "Scheduling & Progress Tracking",
      description:
        "Track progress, schedule sessions, and monitor performance in real-time.",
      icon: <Calendar />,
    },
    {
      title: "Student Community",
      description:
        "Collaborate and grow with a strong community of learners and mentors.",
      icon: <Users />,
    },
  ];

  return (
    <section className="py-18 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            All-in-One{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Learning Platform
            </span>
          </h2>

          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
            Codeyaan combines structured learning, real-world projects, and mentorship
            into one seamless platform to make you job-ready faster.
          </p>
        </motion.div>

        {/* 💳 Cards */}
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-3xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* 🔥 Gradient Border Glow */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Inner Content */}
              <div className="relative bg-white rounded-3xl p-8">

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md group-hover:scale-110 transition">
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}