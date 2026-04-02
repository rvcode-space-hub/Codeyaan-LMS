"use client";

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import authSchema from "./zodValidation";
import {AnimatePresence, motion} from "framer-motion";
import {FaGoogle, FaGithub} from "react-icons/fa";
import React, {useState} from "react";

export default function FormDataSubmit({initialMode = "login"}) {
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
  } = useForm({
    resolver: zodResolver(authSchema(isSignUp)),
    shouldUnregister: false, // Unregister fields when not in use
  });

  const onSubmit = async (formData) => {
    console.log("Form submitted with data:", formData);
    try {
      const url = isSignUp
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const payload = isSignUp
        ? {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        : {
            identifier: formData.identifier,
            password: formData.password,
          };

      console.log(payload);
      console.log(url);

      const res = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      
      console.log(result);

      if (!res.ok) throw new Error(result.message);

      const role = result.data?.role?.trim().toLowerCase(); // Ensure role is in lowercase and trimmed

      console.log("role", role);

      if (role == "student") {
        router.push("/dashboard/user");
      } else if (role == "admin") {
        router.push("/dashboard/admin");
      } else if (role == "instructor") {
        router.push("/dashboard/instructor");
      } else if (role == "super_admin") {
        router.push("/dashboard/superadmin");
      } else {
        alert("Unknown user role");
      }
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    reset();
  };

  return (
    <motion.div
      initial={{x: 50, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      className="
            w-full  p-5 sm:p-6 md:p-8
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
        {!isSignUp && (
          <div>
            <input
              {...register("identifier")}
              placeholder="Email or Username"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.identifier && (
              <p className="text-red-400 text-xs mt-1">
                {errors.identifier.message}
              </p>
            )}
          </div>
        )}

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

        {/* SUBMIT */}
        <motion.button
          whileTap={{scale: 0.96}}
          whileHover={{scale: 1.02}}
          disabled={isSubmitting}
          className="w-full py-2.5 rounded-lg font-semibold text-white bg-linear-to-r from-purple-600 to-blue-600"
        >
          {isSubmitting
            ? "Please wait..."
            : isSignUp
              ? "Create Account"
              : "Login"}
        </motion.button>

        {/* OAUTH */}
        <div className="flex flex-col gap-2">
          <button className="flex items-center cursor-pointer justify-center gap-2 py-2.5 rounded-lg bg-white text-black border border-gray-300 hover:scale-105 transition duration-300">
            <FaGoogle /> Continue with Google
          </button>

          <button className="flex cursor-pointer items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-900 text-white hover:scale-105 transition duration-300">
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
  );
}
