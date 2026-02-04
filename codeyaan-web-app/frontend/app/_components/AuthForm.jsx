'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

/* ===============================
   ZOD VALIDATION SCHEMA
================================ */

const authSchema = z
  .object({
    name: z.string().min(2, 'Name is required').optional(),

    username: z
      .string()
      .min(3, 'Username must be at least 3 characters'),

    email: z.string().email('Invalid email format').optional(),

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
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    reset();
  };

  /* ===============================
     SUBMIT HANDLER
  ================================ */

  const onSubmit = async (formData) => {
    try {
      const url = isSignUp
        ? 'http://localhost:5000/api/auth/signup'
        : 'http://localhost:5000/api/auth/login';

      let payload;

      if (isSignUp) {
        payload = {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };
      } else {
        payload = {
          username: formData.username,
          password: formData.password,
        };
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Something went wrong');

      alert(isSignUp ? 'Signup successful 🎉' : 'Login successful ✅');
      router.push('/dashboard/user');
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  
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
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 7, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-md p-4 rounded-xl shadow-lg bg-white"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center text-blue-900">
            {isSignUp ? 'Create Account' : 'Welcome Codeyaan'}
          </h2>

          {/* NAME – Signup only */}

          <AnimatePresence mode='wait'>
          {isSignUp && (
            <>
              <motion.input
                {...register('name')}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </>
          )}
          </AnimatePresence>

          {/* USERNAME – Login + Signup */}
          <input
            {...register('username')}
            type="text"
            placeholder="Username"
            className="px-4 py-3 border rounded-lg"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">
              {errors.username.message}
            </p>
          )}

          {/* EMAIL – Signup only */}
          {isSignUp && (
            <>
              <input
                {...register('email')}
                type="email"
                placeholder="Email"
                className="px-4 py-3 border rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </>
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

          {/* CONFIRM PASSWORD – Signup only */}
          {isSignUp && (
            <>
              <motion.input
                {...register('confirmPassword')}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-3 border rounded-lg"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </>
          )}

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={isSubmitting}
            className="bg-linear-to-r from-blue-700 to-purple-600 text-white py-3 rounded-lg disabled:opacity-60"
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
