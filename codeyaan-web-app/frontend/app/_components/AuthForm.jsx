'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

/* ===============================
   ZOD VALIDATION SCHEMA
================================ */

const authSchema = z
  .object({
    name: z.string().min(2, 'Name is required').optional(),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) =>
      !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }
  );

export default function AuthForm({ initialMode = 'login' }) {
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');

  /* ===============================
     REACT HOOK FORM
  ================================ */

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  /* ===============================
     TOGGLE LOGIN / SIGNUP
  ================================ */

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    reset();
  };

  /* ===============================
     SUBMIT HANDLER (API CALL)
  ================================ */

  const onSubmit = async (formData) => {
    try {
      const url = isSignUp
        ? 'http://localhost:5000/api/auth/signup'
        : 'http://localhost:5000/api/auth/login';

      const payload = { ...formData };

      // Login ke time extra fields hatao
      if (!isSignUp) {
        delete payload.name;
        delete payload.confirmPassword;
      } else {
        delete payload.confirmPassword;
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      console.log('API Response:', result);

          router.push('/dashboard');

      // 🔐 Future JWT use
      // localStorage.setItem('token', result.token);

      

      alert(isSignUp ? 'Signup successful 🎉' : 'Login successful ✅');
      reset();
    } catch (error) {
      console.error('Auth Error:', error);
      alert(error.message);
    }
  };

  /* ===============================
     UI
  ================================ */

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col md:flex-row items-center justify-center p-2 gap-5"
    >
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full relative flex items-center justify-center"
      >
        <Image
          src="/student.svg"
          alt="Student Learning"
          width={600}
          height={600}
          className="w-1/4 md:w-full"
        />

        <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-purple-600/40 to-transparent rounded-xl" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Welcome to <span className="text-cyan-200">Codeyaan</span>
          </h2>
          <p className="text-gray-100 mt-2 text-sm font-bold">
            Codeyaan is your personalized online learning platform.
          </p>
        </div>
      </motion.div>

      {/* RIGHT FORM */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md dark:bg-gray-800 p-4 rounded-xl shadow-lg"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full bg-white p-4 rounded-xl shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center text-blue-900">
            {isSignUp ? 'Create Account' : 'Welcome Codeyaan'}
          </h2>

          {/* NAME */}
          <AnimatePresence mode="wait">
            {isSignUp && (
              <>
                <motion.input
                  key="name"
                  {...register('name')}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  type="text"
                  placeholder="Enter your name"
                  className="px-4 py-3 border rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </>
            )}
          </AnimatePresence>

          {/* EMAIL */}
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="px-4 py-3 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* PASSWORD */}
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
            className="px-4 py-3 border rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}

          {/* CONFIRM PASSWORD */}
          <AnimatePresence mode="wait">
            {isSignUp && (
              <>
                <motion.input
                  key="confirm"
                  {...register('confirmPassword')}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  type="password"
                  placeholder="Confirm password"
                  className="px-4 py-3 border rounded-lg"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </>
            )}
          </AnimatePresence>

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={isSubmitting}
            className="bg-linear-to-r from-blue-700 to-purple-600/70 text-white py-3 rounded-lg shadow-lg disabled:opacity-60"
          >
            {isSubmitting
              ? 'Please wait...'
              : isSignUp
              ? 'Sign Up'
              : 'Login'}
          </motion.button>

          {/* TOGGLE */}
          <p className="text-center text-sm">
            {isSignUp
              ? 'Already have an account? '
              : "Don't have an account? "}
            <span
              onClick={toggleMode}
              className="text-blue-600 cursor-pointer font-semibold"
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
