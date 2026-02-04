"use client";

import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {BookOpen, Laptop, GraduationCap, Video} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        w-full min-h-[90vh]
        pt-24 md:pt-24
        bg-linear-to-br from-blue-300 via-white to-purple-500
        flex items-center
        rounded-br-full
        shadow-2xl
        overflow-hidden
      "
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          {/* Heading */}
          <h1 className="text-indigo-950 text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-blue-600">Learning</span> Made Smart <br />
            with{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Codeyaan
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl mt-6 text-gray-700 max-w-xl mx-auto md:mx-0">
            Build industry-ready tech skills, gain hands-on experience through
            real-world projects, and advance your career with a modern learning
            platform.
          </p>

          {/* Value Points */}
          <ul className="mt-5 space-y-2 text-sm md:text-base text-gray-800">
            <li>✅ Industry-ready backend & full-stack roadmap</li>
            <li>✅ Hands-on projects with real-world use cases</li>
            <li>✅ Certificates & job-focused learning paths</li>
          </ul>

          {/* Trust Line */}
          <p className="mt-5 text-sm text-gray-800 font-semibold">
            🧪 Early access • Real projects • Skill-based learning
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="
        bg-linear-to-r from-blue-600 to-purple-600
        text-white px-7 py-3 rounded-xl shadow-lg
        hover:shadow-xl
      "
            >
              🚀 Start Learning Free
            </motion.button>

            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="
        bg-white text-indigo-900
        border border-indigo-300
        px-7 py-3 rounded-xl
        flex items-center gap-2
        shadow-sm hover:shadow-md
      "
            >
              <Video className="w-5 h-5" />
              2-min Platform Tour
            </motion.button>
          </div>

          {/* Micro CTA */}
          <p className="mt-3 text-xs text-gray-600">
            🚀 Limited early access • No credit card required
          </p>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center mt-14 md:mt-0 relative"
          initial={{opacity: 0, x: 40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 0.1}}
        >
          {/* Glow */}
          <div className="absolute -z-10 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl" />

          {/* 📘 Book */}
          <motion.div
            animate={{y: [0, -8, 0]}}
            transition={{duration: 4, repeat: Infinity}}
            className="
              absolute left-4 sm:left-12 md:left-16 top-10 md:top-24
              bg-white p-2 md:p-3 rounded-xl shadow-lg
            "
          >
            <BookOpen className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
          </motion.div>

          {/* 💻 Laptop */}
          <motion.div
            animate={{y: [0, 10, 0]}}
            transition={{duration: 4.5, repeat: Infinity}}
            className="
              absolute right-4 sm:right-12 md:right-20 top-16 md:top-28
              bg-white p-2 md:p-3 rounded-xl shadow-lg
            "
          >
            <Laptop className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />
          </motion.div>

          {/* 🎓 Graduation */}
          <motion.div
            animate={{y: [0, -6, 0]}}
            transition={{duration: 4, repeat: Infinity}}
            className="
              absolute right-8 sm:right-16 md:right-30 bottom-24 md:bottom-40
              bg-white p-2 md:p-3 rounded-xl z-20 shadow-lg
            "
          >
            <GraduationCap className="text-indigo-600 w-5 h-5 md:w-6 md:h-6" />
          </motion.div>

          {/* Main Image */}
          <Image
            src="/student.svg"
            width={520}
            height={520}
            alt="Student learning on Codeyaan"
            className="w-full max-w-xs md:max-w-md object-contain relative z-10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
