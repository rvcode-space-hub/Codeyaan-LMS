"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Code2, X, Menu} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import AuthForm from "../forms/AuthForm";

export default function NavbarSection() {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {name: "Home", href: "/"},
    {name: "Courses", href: "/courses"},
    {name: "Blog", href: "/blog"},
    {name: "About", href: "/about"},
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openForm = (mode) => {
    setFormMode(mode);
    setShowForm(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 h-16 sm:h-20 px-4 sm:px-6 md:px-10
        flex items-center transition-all duration-300
        ${
          scrolled
            ? "bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10 shadow-xl"
            : "bg-[#0f0f0f] border-b border-white/10 shadow-lg"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          {/* Icon */}
          <motion.div
            whileHover={{scale: 1.1, rotate: 8}}
            whileTap={{scale: 0.95}}
            className="bg-linear-to-r from-cyan-400 to-purple-600 p-2 sm:p-3 rounded-xl shadow-md"
          >
            <Code2 className="text-white w-5 h-5 sm:w-7 sm:h-7" />
          </motion.div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <motion.h1
              whileHover={{scale: 1.05}}
              className={`text-xl sm:text-2xl md:text-3xl font-extrabold 
      bg-linear-to-r from-cyan-600 via-blue-700 to-purple-700
      bg-clip-text text-transparent`}
            >
              Codeyaan
            </motion.h1>

            <span className="text-white text-[10px] sm:text-sm md:text-base opacity-80">
              Learning Platform
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex ml-auto space-x-12 text-gray-300 font-medium text-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white hover:scale-105 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex ml-8 space-x-5">
          <button
            onClick={() => openForm("login")}
            className="border-2 border-gray-600 px-5 py-2 rounded-xl text-white  hover:bg-white/10 transition font-medium"
          >
            Login
          </button>

          <button
            onClick={() => openForm("signup")}
            className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition font-medium"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-auto text-white"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{y: -20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: -20, opacity: 0}}
              transition={{duration: 0.25}}
              className="fixed top-16 sm:top-20 left-0 w-full bg-[#0f0f0f] shadow-xl z-50 md:hidden rounded-b-2xl"
            >
              <div className="flex flex-col space-y-4 p-5">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 border-t space-y-3">
                  <button
                    onClick={() => openForm("login")}
                    className="w-full border border-gray-600 text-white py-2.5 rounded-xl text-sm"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => openForm("signup")}
                    className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white py-2.5 rounded-xl text-sm"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= AUTH FORM ================= */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          >
            <AuthForm
              initialMode={formMode}
              onClose={() => setShowForm(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
