import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Video , BookOpen , Laptop, GraduationCap  } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[85vh] bg-linear-to-br from-blue-300 via-white to-purple-500 flex items-center rounded-br-full shadow-xl">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 ">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-indigo-950 text-2xl  md:text-5xl font-bold leading-tight md:leading-snug">
            <span className="text-blue-600">Learning</span> Made Smart <br />
            with{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-950 bg-clip-text text-transparent">
              Codeyaan
            </span>
          </h1>

          <p className="text-sm md:text-xl mt-4 mb-5 text-gray-800 max-w-xl mx-auto md:mx-0">
            Learn in-demand tech skills, build real-world projects, and grow your
            career with a smart, modern LMS platform.
          </p>

          {/* Trust Line */}
          <p className="text-sm text-gray-700 mb-4 font-bold">
           🧪 Early access • Real projects • Skill-based learning
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 font-medium justify-center md:justify-start ">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-blue-600 to-purple-500 text-white hover:font-bold cursor-pointer px-7 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              🚀 Start Learning Free
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-900 border border-indigo-300   cursor-pointer px-7 py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <Video className="w-5 h-5" />
              2-min Platform Tour
            </motion.button>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
  <motion.div
  className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 relative"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  {/* Glow */}
  <div className="absolute -z-10 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl" />

  {/* 📘 Book – Left Top */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="hidden md:block absolute left-50 top-24 bg-white p-3 rounded-xl shadow-lg"
  >
    <BookOpen className="text-blue-600 w-6 h-6" />
  </motion.div>

  {/* 💻 Laptop  Right Top */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="hidden md:block absolute right-40 top-28 bg-white p-3 rounded-xl shadow-lg"
  >
    <Laptop className="text-purple-600 w-6 h-6" />
  </motion.div>

  {/* 🎓 Graduation – Right Bottom */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="hidden md:block absolute right-52 bottom-24 bg-white p-3 rounded-xl shadow-lg"
  >
    <GraduationCap className="text-indigo-600 w-6 h-6" />
  </motion.div>

  {/* Main Image */}
  <Image
    src="/student.svg"
    width={600}
    height={600}
    alt="Student learning on Codeyaan"
    className="w-full max-w-xs md:max-w-md object-contain relative z-10"
    priority
  />
</motion.div>



      </div>
    </section>
  );
}
