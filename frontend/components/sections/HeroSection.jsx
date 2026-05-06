"use client";

import React from "react";
import {motion} from "framer-motion";
import {Fullscreen, Video} from "lucide-react";
import CodePanel from "./CodePanel";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen pt-6 sm:pt-10 md:pt-8 flex items-center rounded-br-[80px] overflow-hidden bg-[#0a0a0f]">
      {/* CONTENT */}
      
{/* 🌌 Background Image */}
<motion.div
  className="absolute inset-0 "
  initial={{ scale: 1.1 }}
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}

>

  <Image
    src="/12.jpeg"
    alt="background"
    fill
    priority
    className="object-cover opacity-40"
  />

  {/* Light overlay (fix) */}
  <div className="absolute inset-0 bg-[#0b0f19]/30" />

  {/* Soft gradient (fix) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/60 via-transparent to-transparent" />

</motion.div>
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 gap-10">
        {/* ================= LEFT ================= */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          <p className="text-sm text-indigo-400 mb-3 font-medium">
            🌍 Trusted by learners worldwide
          </p>

          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Master{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Job-Ready Skills
            </span>
            <br />
            Build Real Projects with{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              Codeyaan
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-5 text-gray-300 max-w-xl leading-relaxed">
            Learn by building real-world applications and become job-ready
            faster
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg"
            >
              Start Free Trial
            </motion.button>

            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="w-full sm:w-auto text-white border border-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 justify-center"
            >
              <Video className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </div>

          {/* Social Proof */}
          <div className="mt-6 flex gap-4 text-xs sm:text-sm md:text-base text-gray-400 justify-center md:justify-start">
            <span>⭐ 4.9 Rating</span>
            <span>👨‍🎓 10K+ Students</span>
            <span>💼 Job Ready</span>
            <span>🌍 Global</span>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          className="w-full md:w-1/2 px-4 sm:px-6 mt-10 md:mt-0 relative flex justify-center md:justify-end"
          initial={{opacity: 0, x: 60}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6, ease: "easeOut"}}
        >
          {/* 🔥 Glow Effects */}
          <motion.div
            className="absolute -z-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
            animate={{scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5]}}
            transition={{duration: 6, repeat: Infinity}}
          />

          <motion.div
            className="absolute -z-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl right-0 bottom-0"
            animate={{scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4]}}
            transition={{duration: 7, repeat: Infinity}}
          />

          {/* 💎 Code Card */}
          <motion.div
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl backdrop-blur-xl bg-[#0d1117]/85"
            whileHover={{scale: 1.03}}
            transition={{type: "spring", stiffness: 120}}
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 px-2">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            {/* Code Panel */}
            <motion.div
              className="rounded-xl overflow-hidden border border-white/5"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.3}}
            >
              <CodePanel />
            </motion.div>

            {/* Bottom Glow */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-transparent"
              animate={{opacity: [0.3, 1, 0.3]}}
              transition={{duration: 3, repeat: Infinity}}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
