"use client";

import React, {useEffect} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {IoCloseCircleSharp} from "react-icons/io5";
import FormDataSubmit from "./FormDataSubmit"; // ✅ form component import

export default function AuthForm({initialMode = "login", onClose}) {
  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-3 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        className="w-full relative max-w-sm sm:max-w-md md:max-w-5xl rounded-xl sm:rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* 🔥 MOBILE BACKGROUND */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/student.svg"
            alt="bg"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-3 sm:top-1 sm:right-4 text-white md:text-gray-200 hover:text-red-500 transition z-20"
        >
          <IoCloseCircleSharp size={36} />
        </button>

        {/* LEFT (DESKTOP ONLY) */}
        <div className="hidden md:flex relative md:w-1/2 items-center justify-center overflow-hidden">
          <Image
            src="/student.svg"
            alt="Student"
            fill
            className="object-center"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t from-purple-900/90 via-purple-800/60 to-transparent" />

          <div className="absolute bottom-10 left-6 right-6 z-10 text-white">
            <h2 className="text-3xl font-bold leading-snug">
              Welcome to <span className="text-cyan-300">Codeyaan</span>
            </h2>
            <p className="text-gray-200 mt-2 text-base">
              Learn smarter. Build faster.
            </p>
          </div>
        </div>

        {/* ✅ RIGHT SIDE FORM */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 relative z-10">
          <FormDataSubmit initialMode={initialMode} />
        </div>
      </motion.div>
    </div>
  );
}
