"use client";

import React from "react";
import FeatureCards from "./FeatureCards";
import { BookOpen, Laptop, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CardSection() {
  const features = [
    {
      title: "Structured Learning",
      description: "Step-by-step courses designed from beginner to advanced levels.",
      icon: <BookOpen className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects to strengthen practical skills.",
      icon: <Laptop className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Certifications",
      description: "Earn certificates to showcase your skills and progress.",
      icon: <Award className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6"
      >
        Why Choose <span className="text-purple-600">Codeyaan</span>?
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-cyan-800 text-lg md:text-xl text-center max-w-7xl mx-auto mb-12 leading-relaxed"
      >
        Codeyaan helps you learn by building real projects, not just watching videos.
        With a clear beginner-to-advanced roadmap, simple practical explanations,
        and hands-on practice, you gain real confidence. Access live classes,
        recorded lessons, quizzes, and certificates—all in one easy-to-use LMS.
        Focused on job-ready skills, interviews, and industry tools, Codeyaan keeps
        learning effective, updated, and career-driven. 🚀
      </motion.p>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FeatureCards
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
