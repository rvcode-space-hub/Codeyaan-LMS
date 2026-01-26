/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export default function SignForm({ initialMode = "login" }) {
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.title = isSignUp ? "Sign Up - Codeyaan" : "Login - Codeyaan";
  }, [isSignUp]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!email || !password || (isSignUp && !name)) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const endpoint = isSignUp
      ? `${API_URL}/api/auth/register`
      : `${API_URL}/api/auth/login`;

    const payload = isSignUp
      ? { name, email, password, confirmpassword: confirmPassword, role: "student" }
      : { email, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) return alert(data.message || "Error");

      if (data.token) localStorage.setItem("token", data.token);

      if (data.user?.role === "admin") router.push("/admin/dashboard");
      else if (data.user?.role === "staff") router.push("/staff/dashboard");
      else router.push("/student/dashboard");

    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex flex-col md:flex-row items-center justify-center p-2 md:p-10 gap-5"
    >
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 relative flex items-center justify-center"
      >
        {/* Image */}
        <img
          src="/student.svg"
          className="w-full max-w-md"
        />

        {/* Dark / Gradient Overlay */}
<div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-purple-600/40 to-transparent rounded-xl"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
         <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
  Welcome to <span className="text-cyan-200 drop-shadow-md">Codeyaan</span>
</h2>

          <p className="text-gray-100 mt-2 text-sm md:text-base md:text-base max-w-sm drop-shadow-md font-bold">
            Codeyaan is your personalized online learning platform.
          </p>
        </div>
      </motion.div>


      {/* RIGHT FORM */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex items-center justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full sm:max-w-sm bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>

          <AnimatePresence mode="wait">
            {isSignUp && (
              <motion.input
                key="name"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-3 border rounded-lg"
              />
            )}
          </AnimatePresence>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border rounded-lg"
          />

          <AnimatePresence mode="wait">
            {isSignUp && (
              <motion.input
                key="confirm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-4 py-3 border rounded-lg"
              />
            )}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            className="bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Login"}
          </motion.button>

          <p className="text-center text-sm">
            {isSignUp ? "Already have an account? " : "Don’t have an account? "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 cursor-pointer"
            >
              {isSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
