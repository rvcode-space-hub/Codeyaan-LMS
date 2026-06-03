"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoCloseCircleSharp } from "react-icons/io5";
import FormDataSubmit from "./FormDataSubmit";

export default function AuthForm({ initialMode = "login", onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-sm sm:max-w-md md:max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col md:flex-row"
      >
        {/* Mobile Background */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/12.jpeg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 text-gray-700 hover:text-red-600  transition-all duration-200"
        >
          <IoCloseCircleSharp size={38} />
        </button>

        {/* LEFT SIDE */}
        <div className="hidden md:flex relative md:w-1/2 items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={{ scale: [1.05, 1.1, 1.05] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/12.jpeg"
              alt="Codeyaan"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-blue-900/70" />

          {/* Content */}
          <div className="relative z-10 text-center text-white px-10">
            {/* Logo */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/logo.png"
                alt="Codeyaan Logo"
                width={100}
                height={100}
                className="rounded-full shadow-2xl border border-white/20"
              />
            </motion.div>

            {/* Heading */}
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              Build Your Future with{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Codeyaan
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-200 max-w-md mx-auto leading-relaxed">
              Learn industry-ready skills, build real-world projects,
              and become job-ready with hands-on experience.
            </p>

            {/* Features */}
            <div className="flex justify-center gap-8 mt-10 text-sm font-semibold text-gray-200">
              <span>🚀 Learn</span>
              <span>💻 Build</span>
              <span>🎯 Get Hired</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative z-10 w-full md:w-1/2 bg-white/95 backdrop-blur-xl p-5 sm:p-6 md:p-8">
          <FormDataSubmit initialMode={initialMode} />
        </div>
      </motion.div>
    </div>
  );
}