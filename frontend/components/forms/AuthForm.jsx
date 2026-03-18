"use client";

import React, {useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {FaGoogle, FaGithub} from "react-icons/fa";
import {IoCloseCircleSharp} from "react-icons/io5";

/* ===============================
   VALIDATION
================================ */

const authSchema = z
  .object({
    name: z.string().min(2, "Name is required").optional(),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email format").optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );

export default function AuthForm({initialMode = "login", onClose}) {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    reset();
  };

  const onSubmit = async (formData) => {
    try {
      const url = isSignUp
        ? "http://localhost:5000/api/auth/signup"
        : "http://localhost:5000/api/auth/login";

      const payload = isSignUp
        ? {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }
        : {
            username: formData.username,
            password: formData.password,
          };

      const res = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      router.push("/dashboard/user");
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
          className="absolute cursor-pointer top-2 right-2 sm:top-4 sm:right-4 text-white md:text-gray-600 hover:text-red-500 transition z-20"
        >
          <IoCloseCircleSharp size={26} />
        </button>

        {/* LEFT (DESKTOP ONLY) */}
        <div className="hidden md:flex relative md:w-1/2 h-auto items-center justify-center overflow-hidden">
          <Image
            src="/student.svg"
            alt="Student"
            fill
            className="object-center"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-800/60 to-transparent" />

          <div className="absolute bottom-10 left-6 right-6 z-10 text-white">
            <h2 className="text-3xl font-bold leading-snug">
              Welcome to <span className="text-cyan-300">Codeyaan</span>
            </h2>
            <p className="text-gray-200 mt-2 text-base">
              Learn smarter. Build faster.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{x: 50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          className="
            w-full md:w-1/2 p-5 sm:p-6 md:p-8
            relative z-10 rounded-xl sm:rounded-2xl

            md:bg-blue-50 md:border md:border-gray-200

            /* 🔥 MOBILE GLASS */
            bg-white/20 backdrop-blur-xm border border-white/20
          "
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* HEADING */}
            <div className="text-center">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white md:text-gray-800">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-gray-200 md:text-gray-500 text-xs sm:text-sm mt-1">
                {isSignUp
                  ? "Start your journey with Codeyaan 🚀"
                  : "Login to continue"}
              </p>
            </div>

            {/* NAME */}
            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.input
                  key="name"
                  {...register("name")}
                  placeholder="Full Name"
                  className="px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              )}
            </AnimatePresence>

            {/* USERNAME */}
            <div>
              <input
                {...register("username")}
                placeholder="Username"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              {errors.username && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            {isSignUp && (
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            {isSignUp && (
              <div>
                <input
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="Confirm Password"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            )}

            {/* SUBMIT */}
            <motion.button
              whileTap={{scale: 0.96}}
              whileHover={{scale: 1.02}}
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600"
            >
              {isSubmitting
                ? "Please wait..."
                : isSignUp
                ? "Create Account"
                : "Login"}
            </motion.button>

            {/* OAUTH */}
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black">
                <FaGoogle /> Continue with Google
              </button>

              <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-900 text-white">
                <FaGithub /> Continue with GitHub
              </button>
            </div>

            {/* TOGGLE */}
            <p className="text-center text-xs text-gray-200 md:text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span
                onClick={toggleMode}
                className="ml-1 text-cyan-400 text-base font-serif font-bold md:text-purple-600  cursor-pointer"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </span>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}