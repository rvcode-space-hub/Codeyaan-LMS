"use client";

import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {BookOpen, Laptop, GraduationCap, Video} from "lucide-react";
import {HeroImageContent} from "../../lib/content";

export default function HeroSection() {
  return (
    <section
      className="
        w-full min-h-[80vh] md:min-h-screen
        pt-4 sm:pt-6 md:pt-8
        bg-linear-to-br from-[#0f0f0f] via-[#111827] to-[#1f1f2e]
        flex items-center
        rounded-br-[60px] sm:rounded-br-[120px] md:rounded-br-full
        overflow-hidden
      "
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 gap-10">
        {/* ================= LEFT ================= */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          {/* 🔥 Top Badge */}
          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300"
          >
            🚀 #1 Skill-Based Learning Platform
          </motion.div>

          {/* 🔥 Heading */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Learning
            </span>{" "}
            Made Smart <br />
            with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Codeyaan
            </span>
          </h1>

          {/* 🔥 Subtext */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-5 md:mt-6 text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Build industry-ready tech skills, gain hands-on experience through
            <span className="text-white font-semibold">
              {" "}
              real-world products
            </span>
            , and accelerate your career growth 🚀
          </p>

          {/* 🔥 Features List */}
          <ul className="mt-5 space-y-3 text-sm md:text-base text-gray-300">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-green-400">✔</span>
              Backend & Full-Stack Industry Roadmap
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-green-400">✔</span>
              Hands-on Real-World Projects
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-green-400">✔</span>
              Certificates + Job-Focused Learning
            </li>
          </ul>

          {/* 🔥 Trust Line */}
          <p className="mt-5 text-xs sm:text-sm text-gray-400 font-medium">
            🧪 Early access • Real products • Skill-based learning
          </p>

          {/* 🔥 CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Primary CTA */}
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="relative overflow-hidden cursor-pointer bg-linear-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg"
            >
              <span className="relative z-10">🚀 Start Learning Free</span>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="border border-gray-600 cursor-pointer text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base backdrop-blur-md hover:bg-white/5 transition"
            >
              <Video className="w-4 h-4" />
              2-min Platform Tour
            </motion.button>
          </div>

          {/* 🔥 Extra Trust (NEW) */}
          <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-xs text-gray-400">
            <span>⭐ 4.9 Rating</span>
            <span>👨‍🎓 10K+ Students</span>
            <span>💼 Job Ready</span>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          className="w-full md:w-1/2 relative flex items-center justify-center md:justify-end min-h-[320px] md:min-h-[520px]"
          initial={{opacity: 0, x: 40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          {/* 🔥 Background Glow */}
          <div className="absolute -z-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -z-20 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-500/20 rounded-full blur-3xl right-0 bottom-0" />

          {/* 🔥 Glass Card */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-30 blur-sm" />

            {/* Floating Icons */}
            <motion.div
              animate={{y: [0, -8, 0]}}
              transition={{duration: 4, repeat: Infinity}}
              className="absolute -left-4 top-6 bg-[#1a1a1a]/80 p-2 rounded-xl border border-gray-700"
            >
              <BookOpen className="text-blue-400 w-5 h-5" />
            </motion.div>

            <motion.div
              animate={{y: [0, 10, 0]}}
              transition={{duration: 4, repeat: Infinity}}
              className="absolute -right-4 top-12 bg-[#1a1a1a]/80 p-2 rounded-xl border border-gray-700"
            >
              <Laptop className="text-purple-400 w-5 h-5" />
            </motion.div>

            <motion.div
              animate={{y: [0, -6, 0]}}
              transition={{duration: 4, repeat: Infinity}}
              className="absolute right-6 -bottom-4 bg-[#1a1a1a]/80 p-2 rounded-xl border border-gray-700"
            >
              <GraduationCap className="text-indigo-400 w-5 h-5" />
            </motion.div>

            {/* 🔥 Top Badge */}
            <motion.div
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-4 py-1 rounded-full shadow-md"
            >
              🚀 Live Learning
            </motion.div>

            {/* 🔥 Right Top Notification */}
            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              className="absolute top-6 right-6 bg-green-500/10 text-green-400 backdrop-blur-md px-4 py-2 rounded-xl border border-green-500/20 text-sm shadow-lg"
            >
              💻 Building real projects, not just watching videos
            </motion.div>

            {/* 🔥 Left Middle Card */}
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              className={`absolute z-10 left-0 top-1/2 -translate-y-1/2 
bg-[#111]/50 text-white font-semibold 
backdrop-blur-md px-4 py-2 rounded-xl 
border border-indigo-500/30 text-sm shadow-lg`}
            >
              💻 Real-World Product
            </motion.div>

            {/* 🔥 Bottom Left Stats */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              className="absolute left-4 bottom-6 bg-yellow-500/10 text-yellow-400 backdrop-blur-md px-4 py-2 rounded-xl border border-yellow-500/20 text-sm shadow-lg"
            >
              ⭐ 4.9 Rating
            </motion.div>

            {/* 🔥 Bottom Right Success Card */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              className="absolute right-4 bottom-30 font-medium bg-green-500/10 text-green-400 backdrop-blur-md px-4 py-2 rounded-xl border border-green-500/20 text-sm shadow-lg max-w-[160px]"
            >
              🎉 Congratulations Your Admission Completed
            </motion.div>

            {/* 🔥 Image */}
            {HeroImageContent.map((item, index) => (
              <motion.div
                key={index}
                animate={{y: [0, -12, 0]}}
                transition={{duration: 5, repeat: Infinity}}
                className="relative flex items-center justify-center"
              >
                <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-indigo-500/20 rounded-full blur-2xl" />

                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-full max-w-[240px] sm:max-w-xs md:max-w-md object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(99,102,241,0.4)]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
