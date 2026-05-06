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
        className={`fixed top-0 left-0 w-full h-16 sm:h-20 px-4 sm:px-6 md:px-10
        flex items-center transition-all duration-300 z-50
        ${
          scrolled
            ? "bg-[#0f0f0f]/40 backdrop-blur-md border-b  border-white/10 shadow-xl"
            : "bg-[#0f0f0f] border-b border-white/10 shadow-lg"
        }`}
      >
        <Link href="/" className="flex items-center space-x-3">
          <motion.div
            whileHover={{scale: 1.08}}
            whileTap={{scale: 0.95}}
            className="w-15 h-15 rounded-full  bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#1e1b4b] shadow-2xlborder border-white/10 
               flex flex-col items-center justify-center shadow-lg p-1"
          >
           
            {/* Bottom: CY */}
            <div className="w-14 h-14 bg-gradient-to-br rounded-full from-blue-700 to-purple-800  flex items-center justify-center">

              <span className="text-white  font-extrabold font-sans taxt-base md:text-lg tracking-tight">
                CY
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <motion.h1
              whileHover={{scale: 1.05}}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight"
            >
              <span className="text-white tracking-tight">
                Code
                <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Yaan
                </span>
              </span>
            </motion.h1>

            <span className="text-[10px] sm:text-sm md:text-base font-medium tracking-wide text-gray-400 mt-[2px]">
              Learn Code • Build Future
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

        {/* Desktop Button */}
        <div className="hidden md:flex ml-8">
          <button
            onClick={() => openForm("signup")}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 hover:scale-105 transition"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden ml-auto text-white z-50 relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{rotate: -90, opacity: 0}}
              animate={{rotate: 0, opacity: 1}}
              exit={{rotate: 90, opacity: 0}}
              transition={{duration: 0.2}}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </AnimatePresence>
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{y: -20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: -20, opacity: 0}}
              transition={{duration: 0.25}}
              className="fixed top-16 sm:top-20 left-0 w-full bg-[#0f0f0f] shadow-xl z-40 md:hidden rounded-b-2xl"
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
                    onClick={() => openForm("signup")}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
                  >
                    Get Started
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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center"
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
