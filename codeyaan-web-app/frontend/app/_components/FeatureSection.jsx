"use client";

import React from "react";
import CardSection from "./CardSection";
import { BookOpen, Laptop, Award } from "lucide-react";
import { motion } from "motion/react";

export default function FeatureSection() {
  const features = [
    {
      title: "Structured Learning",
      description: "Step-by-step courses designed from beginner to advanced levels.",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects to strengthen practical skills.",
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Certifications",
      description: "Earn certificates to showcase your skills and progress.",
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },

    {
      title: "AI Interactive Learning",
      description: "Engage with AI-powered tools for personalized learning experiences.",
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
    }
  ];

  return (
    <section className="py-8 px-4 md:px-6 md:py-6">
      <div className="w-full  mx-auto grid gap-10 md:grid-cols-2 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
            Why Choose <span className="text-purple-600">Codeyaan</span>?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Codeyaan helps you learn by actually building real projects, not just
            watching videos. With a clear beginner-to-advanced roadmap, simple
            explanations, hands-on practice, live classes, quizzes, and
            certificates — everything is designed to make you job-ready faster.
          </p>
        </motion.div>

        {/* RIGHT SIDE - FEATURES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full text-center  grid gap-6 sm:grid-cols-2"
        >
          {features.map((item, index) => (
            <CardSection
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
